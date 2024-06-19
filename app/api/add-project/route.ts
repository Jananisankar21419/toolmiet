import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  const newProject = await request.json();

  const filePath = path.join(process.cwd(), 'data', 'index.ts');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Find the position to insert the new project
  const insertPosition = fileContent.lastIndexOf(']');

  // Construct the updated content with the new project appended
  const updatedContent =
    fileContent.slice(0, insertPosition) + `${JSON.stringify(newProject, null, 2)},\n` + fileContent.slice(insertPosition);

  fs.writeFileSync(filePath, updatedContent, 'utf-8');

  return NextResponse.json({ success: true });
}
