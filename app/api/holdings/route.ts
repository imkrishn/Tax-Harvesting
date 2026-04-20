import { NextResponse } from "next/server";
import { holdings } from "@/data/holdings";

export async function GET() {
  return NextResponse.json(holdings);
}
