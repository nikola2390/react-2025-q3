import React from 'react';

interface ResultViewProps {
  data: [];
}

interface Person {
  uid: string;
  properties: { name: string; height: number };
}

export class ResultView extends React.Component<ResultViewProps> {
  render() {
    const { data } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: Person) => (
            <tr key={item.uid}>
              <td>{item.properties.name}</td>
              <td>{item.properties.height}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
