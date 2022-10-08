import './InputForm.css';

function InputForm() {

  function addCardInfo(e) {
    
  }


  return(
    <form>
      <p>
        <label htmlFor="eng-word">English</label>
        <input type="text" id="eng-word"></input>
      </p>
      <p>
        <label htmlFor="rus-word">Russian</label>
        <input type="text" id="rus-word"></input>
      </p>
      <p>
        <label for="theme">Choose theme</label>

        <select name="theme" id="theme">
          <option value="volvo">Погода</option>
          <option value="saab">Дом</option>
          <option value="mercedes">Готовка</option>
          <option value="audi">Учеба</option>
        </select>
      </p>
      <p><button type="button" value="Submit" onClick={addCardInfo}>Add</button></p>
    </form>
  );
}

export default InputForm;

