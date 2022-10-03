import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/api';
import { Table, TableContainer, TableTitle } from './styles';

function Users() {
  const [users, setUsers] = useState([]);

  const fetchGetUser = async () => {
    const result = await getUser();
    setUsers(result);
  };

  useEffect(() => {
    fetchGetUser();
  });

  return (
    <>
      <TableContainer id="table">
        <div className="container">
          <TableTitle className="table-title">Lista de cadastro</TableTitle>
          <Table className="table">
            <thead>
              <tr>
                <th></th>
                <th>nome</th>
                <th>e-mail</th>
                <th>nascimento</th>
                <th>telefone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td></td>
                  <td>{user.id}</td>
                  {/* <td>{user.email}</td> */}
                  {/* <td>{ user.email }</td>
									<td>{ user.image }</td> */}
                  {/* <img src={user.image} alt={user.displayName} /> */}
                  <td></td>
                </tr>
              ))}

              <tr>
                <td className="td-bottom"></td>
                <td className="td-bottom"></td>
                <td className="td-bottom"></td>
                <td className="td-bottom"></td>
                <td className="td-bottom"></td>
                <td className="td-bottom"></td>
              </tr>
            </tbody>
          </Table>
          <span>
            <Link to="/">
              {/* <img src={Icon} alt="Voltar para Home" className="topo-home" /> */}
            </Link>
          </span>
        </div>
      </TableContainer>
      {/* <Footer /> */}
    </>
  );
}

export default Users;
