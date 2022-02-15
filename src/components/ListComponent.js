function ListComponent({ data, setMonthValue, setBdays }) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear()
  if(setMonthValue) {
    return (
      <>
        {data
          .filter((person) => {
            return person.month == setMonthValue;
          })
          .map((person, index, array) => {
            setBdays(array.length);
            return (
              <>
              <div>{person.name}</div>
              <div>{currentYear-person.age}</div>
              <img src={person.image} width="200"/>
              {person.email ? <a href={`mailto:${person.email}`}>Send birthday greeting</a> : ""}
              
              </>
            )
          })}
      </>
    );
  }
}

export default ListComponent;
