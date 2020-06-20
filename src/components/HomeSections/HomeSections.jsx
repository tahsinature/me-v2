import React from 'react';

import FewWordsAboutMe from './Sections/FewWordsAboutMe/FewWordsAboutMe';
import ToolsIAmUsing from './Sections/ToolsIAmUsing/ToolsIAmUsing';
import FrameworksAndLibraries from './Sections/FrameworksAndLibraries/FrameworksAndLibraries';
import ProgrammingLanguages from './Sections/ProgrammingLanguages/ProgrammingLanguages';
import PersonalProjects from './Sections/PersonalProjects/PersonalProjects';
import PublishedWriting from './Sections/PublishedWriting/PublishedWriting';
// import PublicSpeaking from './Sections/PublicSpeaking/PublicSpeaking';
// import EventsIAmAt from './Sections/EventsIAmAt/EventsIAmAt';
import FindMeElseWhere from './Sections/FindMeElseWhere/FindMeElseWhere';

import classes from './HomeSections.module.scss';

const HomeSections = props => {
  return (
    <div className={classes.HomeSections}>
      <FewWordsAboutMe />
      <ToolsIAmUsing />
      <FrameworksAndLibraries />
      <ProgrammingLanguages />
      <PersonalProjects />
      <PublishedWriting />
      {/* <PublicSpeaking /> */}
      {/* <EventsIAmAt /> */}
      <FindMeElseWhere />
    </div>
  );
};

export default HomeSections;
