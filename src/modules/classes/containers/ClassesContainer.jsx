import Nav from "../../../layouts/dashboard/components/Nav.jsx";
import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";
import {CgMathPlus} from "react-icons/cg";
import ButtonBordered from "../../../components/ui/Button.jsx";
import CustomTable from "../../../components/ui/Table.jsx";
import {get} from "lodash";
import mockData from "../../../mock/mockData.js";
import Pagination from "../../../components/pagination/index.jsx";


const ClassesContainer = () => {
    const { t } = useTranslation();
  return(
      <>
          <Nav moduleName={'Sinflar'}/>
          <Flex justifyContent={"flex-end"}>
              <ButtonBordered leftIcon={<CgMathPlus />}>{t("Sinf qo'shish")}</ButtonBordered>
          </Flex>
          <Box w={'100%'} mt={5}>
              <CustomTable tableData={get(mockData,'classesGroupTableData', {})}/>
              <Pagination itemTotalSize={get(mockData,'classesGroupTableData.tbody',[]).length}/>
          </Box>
      </>
  )
}
export default ClassesContainer;
