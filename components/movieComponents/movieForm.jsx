import MoiveItem from './movieItem';

function MoiveForm(props) {
    return (
<form  className="" >
        <div  >
          <label htmlFor='name'>Name</label>
          <input type='text' required id='name' />
        </div>
        <div >
          <label htmlFor='fakeCard'>fake Card</label>
          <input type='text' required id='fakeCard' />
        </div>
        <div >
          <button>finish</button>
        </div>
      </form>
    );
}

export default MoiveForm;