import { pseudoRandomBytes } from 'crypto';
import React from 'react';
import Token from '../../../tokens/tokens.json'
import { Header } from '../../components/Header'
import { ColorPreview } from '../components/colorPreview';
import './page.css';

type User = {
  name: string;
};
interface Colors {
  [key: string]: {
    value : string
    type : string
  }
}

export const Color: React.VFC = () => {
  const colors: Colors   = Token.global.primitiveColor


  return (
    <article>
      <section>
        <h2>Color</h2>
        <h3>Primitive Color</h3>
        <table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Value</th>
                  <th>Color</th>
              </tr>
          </thead>
          <tbody>
          {Object.keys(colors).map((key) => (
            <tr>
              <td>{key}</td>
              <td>{colors[key].value}</td>
              <td><ColorPreview color={colors[key].value} /></td>
            </tr>
          ))}
          </tbody>
        </table>
      </section>
    </article>
  );
};
