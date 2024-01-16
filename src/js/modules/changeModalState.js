const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons");
  const windowWindth = document.querySelector("#width");
  const windowHeight = document.querySelector("#height");
  const windowType = document.querySelector("#view_type");
  const windowProfile = document.querySelectorAll(".checkbox");

  windowForm.forEach((item, i) => {
    item.addEventListener('click', () => {
      state.form = i;
      console.log(state);
    });
  });
};

export default changeModalState;