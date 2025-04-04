import type { Ctx } from "jsr:@murat/yelix";
// API endpoint handler

export async function GET(ctx: Ctx) {
  return await ctx.text('Hello World!', 200);
}

// API endpoint configs
export const path = '/api/hello';