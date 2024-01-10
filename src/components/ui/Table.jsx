import {get, isEqual} from "lodash";
import styled from "styled-components";
import {Button, Image} from "@chakra-ui/react";
import MoreIcon from '../../assets/images/tableMoreIcon.svg'
import EditIcon from '../../assets/images/editIcon.svg'
import InfoIcon from '../../assets/images/InfoIcon.svg'
import DeleteIcon from '../../assets/images/deleteIcon.svg'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const TableContainer = styled.table`
    width: 100%;
    max-width: 100%;
`
const TableThead = styled.thead`
    border-radius: 5px 5px 0 0;
    background: #E6EEF4;
`
const TableTbody = styled.tbody`
    background: #fff;
`
const TheadTr = styled.tr`
    & p{
        padding: 20px 33px;
        color: #7BA1BD;
        font-size: 14px;
        font-weight: 500;
    }
`
const TheadTd = styled.td`
    &:last-child{
        text-align: center;
    }
`
const TbodyTr = styled.tr`
    border-top: 1px solid #E7E7E7;

    & p {
        padding: 20px 33px;
        color: #002540;
        font-size: 13px;
        font-weight: 400;
    }
    
    &:hover {
        background: #f6f6f6;
        cursor: pointer;
    }
`
const TbodyTd = styled.td`
    &:last-child{
        text-align: center;
    }
`

export const CustomTable = ({tableData,handleMore,handleEdit}) => {
    const [active, setActive] = useState(null);
    const navigate = useNavigate();
    return(
        <TableContainer>
            <TableThead>
            {
                get(tableData, 'thead',[])?.map((tr) => (
                    <TheadTr>
                        {
                            tr?.map((td) => (
                                <TheadTd>
                                    <p>{td}</p>
                                </TheadTd>
                            ))
                        }
                        <TheadTd>
                            <Button onClick={handleMore} variant={'unstyled'}><Image src={MoreIcon}/></Button>
                        </TheadTd>
                    </TheadTr>
                ))
            }
            </TableThead>
            <TableTbody>
            {
                get(tableData, 'tbody',[])?.map((tr,i) => (
                    <TbodyTr
                        onClick={() => setActive(i)}
                        style={{backgroundColor: isEqual(active, i) && "#f6f6f6",}}
                        onDoubleClick={() => {
                            navigate(`/classes/view/${i}`);
                        }}
                    >
                        {
                            tr?.map((td) => (
                                <TbodyTd>
                                    <p>
                                        {td}
                                    </p>
                                </TbodyTd>
                            ))
                        }
                        <TbodyTd>
                            <Button onClick={handleEdit} variant={'unstyled'}><Image src={EditIcon}/></Button>
                        </TbodyTd>
                    </TbodyTr>
                ))
            }
            </TableTbody>
        </TableContainer>
    )
}
export const CustomViewTable = ({tableData,handleMore,handleEdit,handleInfo,handleDelete}) => {
    const [active, setActive] = useState(null);
    const navigate = useNavigate();
    return(
        <TableContainer>
            <TableThead>
                {
                    get(tableData, 'thead',[])?.map((tr) => (
                        <TheadTr>
                            {
                                tr?.map((td) => (
                                    <TheadTd>
                                        <p>{td}</p>
                                    </TheadTd>
                                ))
                            }
                            <TheadTd>
                                <Button onClick={handleMore} variant={'unstyled'}><Image src={MoreIcon}/></Button>
                            </TheadTd>
                        </TheadTr>
                    ))
                }
            </TableThead>
            <TableTbody>
                {
                    get(tableData, 'tbody',[])?.map((tr,i) => (
                        <TbodyTr
                            onClick={() => setActive(i)}
                            style={{backgroundColor: isEqual(active, i) && "#f6f6f6",}}
                            onDoubleClick={() => handleInfo(i)}
                        >
                            {
                                tr?.map((td) => (
                                    <TbodyTd>
                                        <p>
                                            {td}
                                        </p>
                                    </TbodyTd>
                                ))
                            }
                            <TbodyTd>
                                <Button onClick={() => handleInfo(i)} variant={'unstyled'}><Image src={InfoIcon}/></Button>
                                <Button onClick={handleDelete} variant={'unstyled'}><Image src={DeleteIcon}/></Button>
                                <Button onClick={handleEdit} variant={'unstyled'}><Image src={EditIcon}/></Button>
                            </TbodyTd>
                        </TbodyTr>
                    ))
                }
            </TableTbody>
        </TableContainer>
    )
}


