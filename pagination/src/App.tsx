import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./components/Pagination";
import UserCard from "./components/UserCard";
import { Passenger, Response } from "./interface/Api";
import styled from "@emotion/styled/macro";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
`;

const PageTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  font-family: "Quicksand", sans-serif;
`;

const UserList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(1, 1fr); // Default: 1 column
  padding-left: 0px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // 2 columns from 768px and above
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); // 3 columns from 1024px and above
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); // 4 columns from 1200px and above
  }

  column-gap: 10px;
  row-gap: 12px;
`;

const PaginationWrapper = styled.div`
  margin-top: 20px; // Pushes the Pagination component to the bottom
`;

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [items, setItems] = useState<Array<Passenger>>([]);

  const handlePageChange = (currentPage: number): void => {
    setPage(currentPage);
  };

  useEffect(() => {
    const fetch = async () => {
      const params = { page, size: 16 };
      const {
        data: { totalPages, data },
      } = await axios.get<Response>(
        "https://api.instantwebtools.net/v1/passenger",
        {
          params,
        }
      );
      setTotalPages(totalPages);
      setItems(data);
    };
    fetch();
  }, [page]);
  return (
    <AppWrapper className="App">
      <PageTitle>Passenger Info</PageTitle>
      <UserList>
        {items.map((item, idx) => (
          <UserCard
            key={idx}
            name={item.name}
            trip={item.trips}
            airline={item.airline[0].name}
          />
        ))}
      </UserList>
      <PaginationWrapper>
        <Pagination
          count={totalPages}
          page={page}
          onPageChange={handlePageChange}
        />
      </PaginationWrapper>
    </AppWrapper>
  );
}

export default App;
