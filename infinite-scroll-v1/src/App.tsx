import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import styled from "@emotion/styled/macro";
import { throttle } from "throttle-debounce";

import { User, Response } from "./interface/Api";
import EmployeeCard from "./components/EmployeeCard";

const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  color: #40e0d0;
  font-family: "Quicksand", sans-serif;
`;

const List = styled.ul`
  overflow-x: hidden;
  overflow-y: scroll;
  list-style: none;
  margin: 0;
  padding: 20px 0;
  width: 100%;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  background-color: #f4f4f4;
  justify-content: space-around;
`;

function App() {
  const scrollRef = useRef<HTMLUListElement | null>(null);
  const pageRef = useRef<number>(0);

  const [items, setItems] = useState<Array<User>>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false);

  const handleScroll = throttle(1000, () => {
    if (scrollRef.current) {
      const { scrollHeight, offsetHeight, scrollTop } = scrollRef.current;

      const offset = 50;

      setIsScrollBottom(scrollHeight - offsetHeight - scrollTop < offset);
    }
  });

  const fetch = async (init?: boolean) => {
    const params = { size: 30, page: pageRef.current };

    try {
      const res = await axios.get<Response>(
        "https://dummyapi.io/data/v1/user",
        {
          params,
          headers: {
            "app-id": "647116479b0e492cae1c3b42",
          },
        }
      );

      setItems(init ? res.data.data : items.concat(res.data.data));
      setIsLast(res.data.total === pageRef.current);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isScrollBottom) {
      pageRef.current = pageRef.current + 1;

      !isLast && fetch();
    }
  }, [isScrollBottom, isLast]);

  useEffect(() => {
    fetch(true);
  }, []);

  return (
    <div style={{ padding: 12 }}>
      <Title>Our Employee List</Title>
      <List ref={scrollRef} onScroll={handleScroll}>
        {items.map((item) => (
          <EmployeeCard
            key={item.id}
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            picture={item.picture}
            title={item.title}
          />
        ))}
      </List>
    </div>
  );
}

export default App;
