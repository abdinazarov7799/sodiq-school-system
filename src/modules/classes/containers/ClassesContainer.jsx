import Nav from "../../../layouts/dashboard/components/Nav.jsx";
import React, {useState} from "react";
import {Box, Flex} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";
import {CgMathPlus} from "react-icons/cg";
import {CustomTable} from "../../../components/ui/Table.jsx";
import {get} from "lodash";
import mockData from "../../../mock/mockData.js";
import Pagination from "../../../components/pagination/index.jsx";
import {ButtonFilled} from "../../../components/ui/Button.jsx";


const ClassesContainer = () => {
    const { t } = useTranslation();
    const [page, setPage] = useState(0);

  return(
      <>
          <Nav moduleName={'Sinflar'} indexPage={true}/>
          <Flex justifyContent={"flex-end"}>
              <ButtonFilled leftIcon={<CgMathPlus />}>{t("Sinf qo'shish")}</ButtonFilled>
          </Flex>
          <Box w={'100%'} mt={5}>
              <CustomTable tableData={get(mockData,'classesGroupTableData', {})}/>
              <Pagination
                  itemTotalSize={get(mockData,'classesGroupTableData.tbody',[]).length}
                  setPage={setPage}
                  pageCount={get(mockData, "classesGroupTableData.totalPages", 0)}
                  page={page}
              />
          </Box>
      </>
  )
}
export default ClassesContainer;
