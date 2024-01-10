import React from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { toNumber } from "lodash";

const Styled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    span {
        width: 15%;
        font-size: 14px;
        font-weight: 400;
        color: #BBB;
    }
    ul {
        width: 100%;
        display: flex;
        margin: 16px 0;
        justify-content: flex-end;
        align-items: center;

        li {
            a {
                width: 18px;
                height: 18px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 3px;
                font-size: 14px;
            }
            margin-right: 10px;
            transition: 0.3s ease;

            &:hover {
                background: #0094FFBE;
                border-radius: 3px;
                color: #fff;
            }

            &.selected {
                a {
                    background-color: #0094FF;
                    color: #fff;
                    border-color: #0bc4ea;
                    border-radius: 3px;
                }
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }
`;
const Pagination = ({
                        pageCount = 1,
                        page = 0,
                        setPage = () => {},
                        itemTotalSize = 0,
                        ...rest
}) => {

  return (
    <Styled {...rest}>
        <span>
            {`1 - 10 / ${itemTotalSize} tadan`}
        </span>

        <ReactPaginate
        breakLabel="..."
        nextLabel={<FiChevronRight size={22} />}
        onPageChange={({ selected }) => setPage(selected)}
        pageRangeDisplayed={3}
        initialPage={toNumber(page)}
        pageCount={pageCount}
        previousLabel={<FiChevronLeft size={22} />}
        renderOnZeroPageCount={null}
      />
    </Styled>
  );
};

export default Pagination;
