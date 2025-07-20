import { Component } from 'react';

import './ResultView.css';

interface ResultViewProps {
  data?: Person[];
}

export interface Person {
  uid: string;
  properties: PersonDescription;
}

export interface PersonDescription {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
}

export class ResultView extends Component<ResultViewProps> {
  createDescription(info: PersonDescription) {
    return `Year of birth: ${info.birth_year}\n Gender: ${info.gender}\n Height: ${info.height}\n Mass: ${info.mass}\n Hair color: ${info.hair_color}\n Eye color: ${info.eye_color}`;
  }

  render() {
    const { data } = this.props;
    if (data?.length === 0) {
      return <div className="empty">No result found</div>;
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th className="header-cell">Name</th>
            <th className="header-cell">Description</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: Person) => (
            <tr key={item.uid} className="row">
              <td className="cell">{item.properties.name}</td>
              <td className="cell">
                <pre>{this.createDescription(item.properties)}</pre>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
