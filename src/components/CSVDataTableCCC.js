import React, {useState, useEffect, useRef} from 'react';
import Papa from 'papaparse';
// import $ from "jquery";
// import 'datatables.net-dt/css/jquery.dataTables.min.css';
// import 'datatables.net-dt/js/dataTables.dataTables.min.js';
// import 'datatables.net-fixedheader-dt';
// import 'datatables.net-responsive-dt';
// import 'datatables.net-scroller-dt';
// import 'datatables.net-plugins/dataRender/ellipsis.mjs';
// import jszip from 'jszip';
// import pdfmake from 'pdfmake';
import DataTable from 'datatables.net-dt';
// import 'datatables.net-buttons-dt';
// import 'datatables.net-buttons/js/buttons.colVis.mjs';
// import 'datatables.net-buttons/js/buttons.html5.mjs';
// import 'datatables.net-buttons/js/buttons.print.mjs';



export function CSVDataTableCCC({csvUrl}) {
    const [data, setData] = useState([]);
    const tableRef = useRef(null);

    const tableId = `table-${hashCode(csvUrl)}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
    //             Papa.parse(csvUrl, {
    //                 download: true,
    //                 header: true,
    //                 skipEmptyLines: true,
    //                 complete: (results) => {
    //                     setData(results.data);
    //             $(document).ready(() => {
    //                 const myDataTable = $(tableRef.current).DataTable({
    //                     responsive: {
    //                             details: {
    //                                 type: 'column',
    //                                 target: 'tr'
    //                             }
    //                         },
    //                     paging: true,
    //                     ordering: true,
    //                         columnDefs: [
    //                     { responsivePriority: 100, targets: 0 },
    //                     { responsivePriority: 2, targets: 1 },
    //                     { responsivePriority: 6, targets: 2 },
    //                     { responsivePriority: 3, targets: 3 },
    //                     { responsivePriority: 4, targets: 4 },
    //                     { responsivePriority: 102, targets: 5 },
    //                     { responsivePriority: 103, targets: 6 },
    //                     { responsivePriority: 104, targets: 7 },
    //                     { responsivePriority: 105, targets: 8 },
    //                     { responsivePriority: 1, targets: 9 }
    // ]
    //                 });
    //                 $(window).on('resize', function () {
    //                 //     // Trigger responsive recalculation
    //                     myDataTable.responsive.recalc();
    //                 //
    //                 // //     // Trigger FixedHeader update
    //                 //     myDataTable.fixedHeader.adjust();
    //                 });


    //                 // Add the sidebar toggle event listener
    //                 // $('.navbar__toggle').on('click', function () {
    //                 //     // Use setTimeout to delay the adjustment slightly,
    //                 //     // allowing the sidebar to finish its collapsing/expanding animation
    //                 //     setTimeout(function () {
    //                 //         // Trigger responsive recalculation
    //                 //         myDataTable.responsive.recalc();
    //                 //
    //                 //         // Trigger FixedHeader update
    //                 //         myDataTable.fixedHeader.adjust();
    //                 //     }, 250); // Adjust the delay time as needed
    //             });
    //                 }
    //             });

                // });
                // console.log('NavbarHeight: ', $('.navbar').outerHeight())
            } catch (error) {
                console.error(error);
            }


        };
        fetchData();
    }, [csvUrl]);

    // useEffect(() => {
    //   const table = tableRef.current;
    //   const header = table.querySelector('thead');
    //   const body = table.querySelector('tbody');
    //
    //   const setWidths = () => {
    //     const headerCells = header.querySelectorAll('th');
    //     const bodyCells = body.querySelectorAll('td');
    //
    //     for (let i = 0; i < headerCells.length; i++) {
    //       const headerWidth = headerCells[i].offsetWidth;
    //       const bodyWidth = bodyCells[i].offsetWidth;
    //       const maxWidth = Math.max(headerWidth, bodyWidth);
    //
    //       headerCells[i].style.width = `${maxWidth}px`;
    //       bodyCells[i].style.width = `${maxWidth}px`;
    //     }
    //   };
    //
    //   setWidths();
    //   window.addEventListener('resize', setWidths);
    //
    //   return () => {
    //     window.removeEventListener('resize', setWidths);
    //   };
    // }, [data]);

    // const tableDivStyle = {
    //   height: `600px`,
    //   overflowY: 'scroll'
    // };
    //
    // const tableStyle = {
    //   position: 'relative',
    //   borderCollapse: 'collapse'
    // };
    //
    // const headerStyle = {
    //   position: 'sticky',
    //   top: 0,
    //   backgroundColor: 'white'
    // };
    // const thStyle = {
    //   position: 'sticky',
    //   top: 0,
    //   backgroundColor: 'white'
    // };
    return (
        <div style={{ width: '100%' }}>
        <table ref={tableRef} id={tableId} className="display" style={{ width: '100%' }}>
            <thead style={{ width: '100%' }}>
            <tr style={{ width: '100%' }}>
                {data[0] && Object.keys(data[0]).map((key) => (
                    <th key={key}>{key}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, i) => (
                <tr key={i}>
                    {Object.values(row).map((value, j) => (
                        <td key={j}>{value}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table></div>
    );
};

// export default CSVDataTable;


function hashCode(str) {
  let hash = 0;
  if (str.length == 0) {
    return hash;
  }
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}