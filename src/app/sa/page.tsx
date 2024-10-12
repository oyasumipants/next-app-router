import { createTask } from '@/actions/serverActions'

const ServerActionsPage = () => {
  return (
    <div>
        <form action={createTask}>
            <input type="text" id='name' name='name' className='bg-gray-200'/>
            <button type='submit' className='bg-gray-400 ml-2 px-2'>
                送信
            </button>
        </form>
    </div>
  );
};

export default ServerActionsPage