import './App.css';
import Item from './components/Item'
import ItemDate from './components/ItemDate';
function App() {
  const response = [
    {
      itemName: "Nirmaa",
      itemDate: "20 ",
      itemMonth: "June ",
      itemYear: "1998 "
    },

    {
      itemName: "Surff Excel",
      itemDate: "10 ",
      itemMonth: "July ",
      itemYear: "2005 "
    },

    {
      itemName: "555 ",
      itemDate: "30 ",
      itemMonth: "May ",
      itemYear: "1995"
    }
  ];
  return (
      <div>
        <Item name= {response[0].itemName} > 1</Item>
        <ItemDate day={response[0].itemDate}  month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

        <Item name= {response[1].itemName}>2</Item>
        <ItemDate day={response[1].itemDate}  month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

        <Item name= {response[2].itemName} >3</Item>
        <ItemDate day={response[2].itemDate}  month= {response[2].itemMonth} year={response[2].itemYear}></ItemDate>
      </div>
  );
}

export default App;
