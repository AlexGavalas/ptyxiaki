import React from 'react';
import { Table } from 'react-bootstrap';

export default class InfoTable extends React.PureComponent {

  render () {

    const { professors } = this.props;

    if (!professors) return null;

    const headers = ['Θεωρία', 'Εργαστήριο', 'Φροντιστήριο'];

    const subheaders = ['Διδάσκοντας', 'Ώρες', 'Τμήματα', 'Ώρες', 'Τμήματα', 'Ώρες', 'Τμήματα'];

    const hours = ['theoryHours', 'theorySegments', 'labHours', 'labSegments', 'tutorialHours', 'tutorialSegments'];

    return (
      <Table>
        <thead>
          <tr>
            <th></th>
            {headers.map((header, i) => (<th key={i} colSpan={2}>{header}</th>))}
          </tr>
          <tr>
            {subheaders.map((h, i) => (<th key={i}>{h}</th>))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(professors).map((key, i) => (
            <tr key={i}>
              <td>{`${professors[key].professor.name} ${professors[key].professor.surname}`}</td>
              {hours.map((hour, i) => (<td key={i}>{professors[key][hour]}</td>))}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
};
