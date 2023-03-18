import AppRouter from "./router/AppRouter";
import "./App.scss";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./router/router";

function App() {
  return (
    // <RouterProvider
    //   router={router}
    //   fallbackElement={<div>Loading...</div>}
    // />// yeni versiyonla oluşturulmuş router yapısı
    <AppRouter /> // eski versiyon
  );
}

export default App;
