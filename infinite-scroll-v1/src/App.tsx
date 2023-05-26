import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import styled from "@emotion/styled/macro";
import { throttle } from "throttle-debounce";

import { Passenger, Response } from "./interface/Api";

const ListItem = styled.li`
  font-size: 36px;
`;

const List = styled.ul`
  overflow-x: hidden;
  overflow-y: scroll;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 512px;
  ${ListItem} + ${ListItem} {
    margin-top: 12px;
  }
`;

function App() {
  const scrollRef = useRef<HTMLUListElement | null>(null);
  const pageRef = useRef<number>(0);

  const [items, setItems] = useState<Array<Passenger>>([]);
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
        "https://api.instantwebtools.net/v1/passenger",
        { params }
      );

      setItems(init ? res.data.data : items.concat(res.data.data));
      setIsLast(res.data.totalPages === pageRef.current);
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
    <div>
      <List ref={scrollRef} onScroll={handleScroll}>
        {items.map((item) => (
          <ListItem key={item._id}>{item.name}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
