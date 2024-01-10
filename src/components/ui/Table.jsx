import {get} from "lodash";
import styled from "styled-components";
import {Button, Image} from "@chakra-ui/react";
import MoreIcon from '../../assets/images/tableMoreIcon.svg'
import EditIcon from '../../assets/images/editIcon.svg'

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

`
const TbodyTr = styled.tr`
    border-top: 1px solid #E7E7E7;
    & p{
        padding: 20px 33px;
        color: #002540;
        font-size: 13px;
        font-weight: 400;
    }
`
const TbodyTd = styled.td`

`

const CustomTable = ({tableData,onClickMore,onClickEdit}) => {
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
                            <Button onClick={onClickMore} variant={'unstyled'}><Image src={MoreIcon}/></Button>
                        </TheadTd>
                    </TheadTr>
                ))
            }
            </TableThead>
            <TableTbody>
            {
                get(tableData, 'tbody',[])?.map((tr) => (
                    <TbodyTr>
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
                            <Button onClick={onClickEdit} variant={'unstyled'}><Image src={EditIcon}/></Button>
                        </TbodyTd>
                    </TbodyTr>
                ))
            }
            </TableTbody>
        </TableContainer>
    )
}
export default CustomTable;
