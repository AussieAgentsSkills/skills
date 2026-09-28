import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "";

function getSupabase() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  }
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
}

export async function GET(request: NextRequest) {
  try {
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
      return NextResponse.json({ error: "misconfigured" }, { status: 500 });
    }
    const supabase = getSupabase();
    const { searchParams } = new URL(request.url);
    const sort = searchParams.get("sort") || "rating";

    let query = supabase
      .from("community_skills")
      .select(`
        id,
        name,
        slug,
        description,
        category,
        price,
        downloads,
        rating_avg,
        rating_count,
        created_at,
        creator:creators(name, x_handle)
      `)
      .eq("status", "approved");

    // Apply sorting
    if (sort === "rating") {
      query = query.order("rating_avg", { ascending: false });
    } else if (sort === "downloads") {
      query = query.order("downloads", { ascending: false });
    } else if (sort === "newest") {
      query = query.order("created_at", { ascending: false });
    }

    const { data: skills, error } = await query;

    if (error) {
      console.error("Fetch error:", error);
      return NextResponse.json({ skills: [] });
    }

    return NextResponse.json({ skills: skills || [] });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ skills: [] });
  }
}
