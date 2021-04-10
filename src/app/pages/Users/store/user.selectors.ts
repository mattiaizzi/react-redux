import { createSelectorHook } from 'react-redux';
import { RootState } from 'src/app/core/store/app.store';

export const rootSelector = createSelectorHook<RootState>();

const useSelector = () => {
  const users = rootSelector((store) => store.usersPage.users);
  return {
    users,
  };
};

export default useSelector;
