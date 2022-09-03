import React, { FunctionComponent } from 'react';

type Props = {
   tags: any;
   updatePage: Function;
   selectedTagId: string;
}

const TagFilters: FunctionComponent<Props> = (props: Props) => {
   return (
      <div className="tag-filters-container">
         these are the tag filters
      </div>
   )
}

export default TagFilters;