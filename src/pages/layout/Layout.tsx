import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
// import { Header } from "widgets/header"; // TODO
// import { Footer } from "widgets/footer"; // TODO
// import { Spinner } from "shared/ui"; // TODO

/** единый шаблон для всех страниц */
const LayoutPage: React.FC = () => {
  return (
    // TODO: перенести все в стили
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      {/* <Header /> */}
      <Box>
        <Suspense
        // fallback={<Spinner size="large" />        }
        >
          <Outlet />
        </Suspense>
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default LayoutPage;
