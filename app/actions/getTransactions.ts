'use server';
import {db} from '@/lib/db';
import {auth} from '@clerk/nextjs/server';
import {ITransaction} from "@/types/transaction.interface";

async function getTransactions():Promise<{
    transactions?: ITransaction[];
    error?: string;
}>{
    const {userId} = auth();

    if(!userId){
        return {error: 'User not found'}
    }

    try{
        const transactions = await db.transaction.findMany({
            where: {userId},
            orderBy:{
                createdAt: 'desc'
            }
        })

        return {transactions};

    }
    catch(error){
        return {error: 'Database error'};
    }
}

export default getTransactions;