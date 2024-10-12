import { NextResponse } from 'next/server';

export interface Task {
    id: number;
    name: string;
}

const tasks: Task[] = [
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
    { id: 3, name: 'Task 3' },
];

const sleep = (ms: number) => 
    new Promise(( resolve ) => setTimeout( resolve, ms ));

export const GET = async () => {
    await sleep( 3000 );
    return NextResponse.json( {tasks}, {
        status: 200
    } );
}

    export const dynamic = 'force-dynamic';