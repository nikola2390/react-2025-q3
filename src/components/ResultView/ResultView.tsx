import React from 'react';

interface ResultViewProps {
  data: [];
}

interface Person {
  uid: string;
  properties: PersonDescription;
}

interface PersonDescription {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
}

export class ResultView extends React.Component<ResultViewProps> {
  createDescription(info: PersonDescription) {
    return `Year of birth: ${info.birth_year}\n Gender: ${info.gender}\n Height: ${info.height}\n Mass: ${info.mass}\n Hair color: ${info.hair_color}\n Eye color: ${info.eye_color}`;
  }

  render() {
    const { data } = this.props;
    if (data.length === 0) {
      return <div>No result found</div>;
    }

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
              <td>
                <pre>{this.createDescription(item.properties)}</pre>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
