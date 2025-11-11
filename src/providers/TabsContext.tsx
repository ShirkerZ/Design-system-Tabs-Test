import { createContext, useContext } from 'react';

const TabsContext = createContext<{ variant?: 'pill' | 'underline' }>({});

export const useTabsContext = () => useContext(TabsContext);
export { TabsContext };
