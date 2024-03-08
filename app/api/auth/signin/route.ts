import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/prisma';
import jwt from 'jsonwebtoken';

async function authenticateUser(email: string, password: string) {
  console.log("2", email);
  
  
  const users = await prisma.users.findMany();
  console.log(users);

  const user = await prisma.users.findFirst({
    where: {email: email, password: password}
  });
  
  return user
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { email, password } = await req.json();
  console.log(email);
  
  try {
    const user = await authenticateUser(email, password);
console.log("1",user);

    if(!user){
      return NextResponse.json({ message: "no user" }, { status: 400 });
    }else {
      const token = jwt.sign({ email: user.email }, "POWER", {
        expiresIn: '1m'
      });
      return NextResponse.json({ message: "Login success" , token: token}, { status: 200 });
    }
  } catch (error) {
      return NextResponse.json({ message: "Login failed" }, {
          status: 500
      })
  }
}