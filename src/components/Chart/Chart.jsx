import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import s from './Chart.module.css'

// {
//   name: 'Page G',
//   uv: 3490,
//   pv: 4300,
//   amt: 2100,
// },

const Chart = ({ chartTypeRender, data /* newIncomes, newExensescomes */ }) => {
  // const incomesData = useSelector(state => state.transactions.transactions.incomesByCategory);
  // const expencesData = useSelector(state => state.transactions.transactions.expensesByCategory);
  console.log(data);
  //   [ { z/p:[ [name:pv][name:pv]] } ]
  const incomesDataFromReport = Object.values(data[0]);
  //  [ [name:pv][name:pv] ]
  const resultedDataForChart = incomesDataFromReport[0].map(
    ([subCategoryName, subCategoryValue], index) => {
      const obj = {
        name: subCategoryName,
        Сумма: subCategoryValue,
      };
      return obj;
    },
  );
  //  [ {name:pv}{name:pv} ]

  // let chartData;
  // const incomesData = newIncomes
  //   .filter(item => item !== false)
  //   .map(item => {
  //     return {
  //       name: item.category,
  //       Сумма: item.sum,
  //     };
  //   });

  // const expencesData = newExensescomes
  //   .filter(item => item !== false)
  //   .map(item => {
  //     console.log(item);
  //     return {
  //       name: item.category,
  //       Сумма: item.sum,
  //     };
  //   });

  //chartTypeRender === 'incomes' ? (chartData = incomesData) : (chartData = expencesData);

  return (
    <>
      {/*       <p>{chartTypeRender}</p> */}
      <BarChart
        width={800}
        height={500}
        data={resultedDataForChart}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Сумма" className={s.color} /* fill="red" */ />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    </>
  );
};

export default Chart;
