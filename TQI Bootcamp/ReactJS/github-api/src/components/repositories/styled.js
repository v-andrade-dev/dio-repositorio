import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
`;


export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 16px;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
    z-index: 9999;
    background-color: white;
    margin-left: 8px;


    &:focus{
        outline: none;
    }

    &.is-selected{
        box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);

        border-bottom-left-radius: 0;
        border-bottom-left-radius: 0;

        border-bottom: 1px solid white;
        box-shadow: 0 0 0 white;
    }
`;

WrapperTab.tabsRole = "Tab";


export const WrapperTabPanel = styled(TabPanel)`
    display: none;
    padding: 16px;
    border: 1px solid #ccc;
    box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
    margin-top: -5px;

    &.is-selected{
        display:block;
    }
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;    
`;
