import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
      const users = await prisma.users.findMany();
      
      return NextResponse.json({ message: "sucessfully fetched data", data: users[0].email }, {
          status: 200
      })
  } catch (error) {
      return NextResponse.json({ message: "failed to fetched data" }, {
          status: 500
      })
  }
}