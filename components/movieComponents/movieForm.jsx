import MoiveItem from './movieItem';

function MoiveForm(props) {
    return (
<form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
  <div className=" mb-4" >
    <label className= "block text-gray-700 text-sm font-bold mb-2" htmlFor='name'>Name</label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type='text' requiredid='name' />
  </div>
  <div className=" mb-4" >
    <label className= "block text-gray-700 text-sm font-bold mb-2" htmlFor='fakeCard'>fake Card</label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='text' required id='fakeCard' />
  </div>
  <div >
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">finish</button>
  </div>
</form>
    );
}

export default MoiveForm;
