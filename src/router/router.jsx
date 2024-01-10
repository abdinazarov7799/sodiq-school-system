import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import IsAuth from "../services/auth/IsAuth";
import { OverlayLoader } from "../components/ui/loader";
import DashboardLayout from "../layouts/dashboard";
import AuthLayout from "../layouts/auth";
import IsGuest from "../services/auth/IsGuest";
import utc from 'dayjs/plugin/utc'
import NotFoundPage from "../modules/auth/pages/NotFoundPage.jsx";
import dayjs from "dayjs";
import ClassesPage from "../modules/classes/pages/ClassesPage.jsx";
import TeachersPage from "../modules/teachers/pages/TeachersPage.jsx";
import StudentsPage from "../modules/students/pages/StudentsPage.jsx";
import SciencesPage from "../modules/sciences/pages/SciencesPage.jsx";
import LessonPage from "../modules/lesson/pages/LessonPage.jsx";
import JournalPage from "../modules/journal/pages/JournalPage.jsx";
import KPIPage from "../modules/kpi/pages/KPIPage.jsx";
import LoginPage from "../modules/auth/pages/LoginPage.jsx";
import ClassesViewPage from "../modules/classes/pages/ClassesViewPage.jsx";


const Router = () => {
  dayjs.extend(utc)
  return (
    <BrowserRouter>
      <Suspense fallback={<OverlayLoader />}>
        <IsAuth>
          <Routes>
            <Route path={"/"} element={<DashboardLayout />}>
              <Route
                path={"/classes"}
                index
                element={<ClassesPage/>}
              />
              <Route
                  path={"classes/view/:id"}
                  element={<ClassesViewPage/>}
              />
              <Route
                path={"/teachers"}
                index
                element={<TeachersPage />}
              />
              <Route
                path={"/students"}
                index
                element={<StudentsPage />}
              />
              <Route
                path={"/sciences"}
                index
                element={<SciencesPage />}
              />
              <Route
                path={"/lesson-plan"}
                index
                element={<LessonPage />}
              />
              <Route
                path={"/journal"}
                index
                element={<JournalPage />}
              />
              <Route
                path={"/kpi"}
                index
                element={<KPIPage />}
              />
              <Route
                path={"auth/*"}
                element={<Navigate to={"/classes"} replace />}
              />
              <Route
                path={"/"}
                element={<Navigate to={"/classes"} replace />}
              />
              <Route path={"*"} element={<NotFoundPage />} />
            </Route>
          </Routes>
        </IsAuth>

        <IsGuest>
          <Routes>
            <Route path={"/auth"} element={<AuthLayout />}>
              <Route index element={<LoginPage />} />
            </Route>
            <Route path={"*"} element={<Navigate to={"/auth"} replace />} />
          </Routes>
        </IsGuest>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
