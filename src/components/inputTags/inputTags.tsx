import React from 'react';

export type Tag = {
  id: number;
  tagText: string
};

export type InputTagsOptions = {
  buttonText?: string;
  hiddenButton?: boolean;
  fixInEnterKey?: boolean;
  aVoidDuplication?:boolean;
}

export type InputTagsProps = {
  tags: Tag[];
  setTags: (tags:Tag[]) => void;
  changeTags?: ()=>void;
  type?:'text' | 'number' | 'tel' | 'email' | 'url' | 'search';
  minlength?:number;
  maxlength?:number;
  pattern?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  option?: InputTagsOptions;
};

export const InputTags  = (props: InputTagsProps) => {
  const [tags, setTags] = React.useState<Tag[]>(props.tags);
  const [inputValue, setInput] = React.useState<string>('');
  const changeTag = React.useRef(false);

  React.useEffect(() => {
    if(changeTag.current) {
      changeTag.current = false;
      return;
    };
    changeTag.current = true;
    setTags(props.tags);
  },[props.tags]);

  React.useEffect(() => {
    if(changeTag.current) {
      changeTag.current = false;
      return;
    };
    props.changeTags && props.changeTags();
    changeTag.current = true;
    props.setTags(tags);
  },[tags]);

  const addTag = (value: string) => {
    const newTags = [...tags];
    newTags.push({id: tags.length, tagText:value});
    setTags(newTags);
  };

  return(
    <>
      <div className='input-tags'>
        {
          tags.map(
            (tag) => {
              return <div className={`tag-${tag.id}`} key={tag.id}>{tag.tagText}</div>
            }
          )
        }
        <input 
          className='text-input' 
          type={props.type || 'text'}
          minLength={props.minlength || 0}
          maxLength={props.maxlength || 1024} 
          pattern={props.pattern || ''}
          disabled={props.disabled || false}
          onChange={(e)=>{setInput(e.target.value);}}
        />
        <button
          className='add-button' 
          disabled={props.disabled || false}
          onClick={() => {
            addTag(inputValue);
          }}
        > 
          add 
        </button>
      </div>  
    </>
  );
};
