import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className='pricing-body'>
      <div className='pricing-container'>
        <h1 className='pricing-title'>The Details...</h1>
        <div className='mastering-pricing'>
          <h2 className='pricing-subtitle'>Full Mastering Price List</h2>
          <p></p>
          <div className='tables'>
            <table className='pricing-table'>
              <thead>
                <tr>
                  <th># of Songs</th>
                  <th> Price Per Song</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    750<span className='currency'>kr</span>
                  </td>
                  <td>
                    750<span className='currency'>kr</span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    650<span className='currency'>kr</span>
                  </td>
                  <td>
                    1300<span className='currency'>kr</span>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    550<span className='currency'>kr</span>
                  </td>
                  <td>
                    1650<span className='currency'>kr</span>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    450<span className='currency'>kr</span>
                  </td>
                  <td>
                    1800<span className='currency'>kr</span>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    420<span className='currency'>kr</span>
                  </td>
                  <td>
                    2100<span className='currency'>kr</span>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    400<span className='currency'>kr</span>
                  </td>
                  <td>
                    2400<span className='currency'>kr</span>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    380<span className='currency'>kr</span>
                  </td>
                  <td>
                    2660<span className='currency'>kr</span>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    360<span className='currency'>kr</span>
                  </td>
                  <td>
                    2880<span className='currency'>kr</span>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    340<span className='currency'>kr</span>
                  </td>
                  <td>
                    3060<span className='currency'>kr</span>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>
                    320<span className='currency'>kr</span>
                  </td>
                  <td>
                    3200<span className='currency'>kr</span>
                  </td>
                </tr>
                <tr>
                  <td>11+</td>
                  <td>
                    300<span className='currency'>kr</span>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <table className='pricing-table'>
              <thead>
                <tr>
                  <th>Extra/Add Ons</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Stem Mastering</td>
                  <td>
                    +300<span className='currency'>kr</span>/song
                  </td>
                </tr>
                <tr>
                  <td>Extra Edits - Instrumental - Sing Back</td>
                  <td>
                    +150<span className='currency'>kr</span>/edit
                  </td>
                </tr>
                <tr>
                  <td>Apple Digital Master</td>
                  <td>
                    +100<span className='currency'>kr</span>/song
                  </td>
                </tr>
                <tr>
                  <td>DDP</td>
                  <td>
                    +300<span className='currency'>kr</span>
                  </td>
                </tr>
                <tr>
                  <td>Vinyl Pre Master</td>
                  <td>
                    +300<span className='currency'>kr</span>
                  </td>
                </tr>
                <tr>
                  <td>Emergency 24h Delivery</td>
                  <td>
                    +750<span className='currency'>kr</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='post-pricing'>
          <h2 className='pricing-subtitle'>
            Film / TV / Media / Post / Surround
          </h2>
          <p>
            Depends on the project and deadline but we lay around 3000
            <span className='currency'>kr</span> + Moms per day or 500
            <span className='currency'>kr</span>+moms/hour
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
