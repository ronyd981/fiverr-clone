import { Route, Routes, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ModalProvider } from "@/context";

const queryClient = new QueryClient();

// Layout
import { Private, Public } from "@/layout";

// Pages
import {
  Home,
  Categories,
  Gig,
  GigId,
  MyGigs,
  Orders,
  Add,
  Message,
  Messages,
  Payment,
  Success,
} from "@/pages";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Public />}>
              <Route index element={<Home />} />
              <Route path="cat">
                <Route index element={<Categories />} />
                <Route path=":category" element={<Gig />} />
                <Route path=":category/:gigId" element={<GigId />} />
              </Route>
              <Route element={<Private />}>
                <Route path="gigs" element={<MyGigs />} />
                <Route path="add-gig" element={<Add />} />
                <Route path="orders" element={<Orders />} />
                <Route path="messages" element={<Messages />} />
                <Route path="messages/:id" element={<Message />} />
                <Route path="payment/:id" element={<Payment />} />
                <Route path="success" element={<Success />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
