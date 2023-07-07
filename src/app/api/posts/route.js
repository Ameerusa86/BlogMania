import connect from "@/Utils/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();
    const posts = await Post.find();

    return new NextResponse(posts, { status: 200 });
  } catch (error) {
    return new NextResponse("DB is Not working", { status: 500 });
  }
};
