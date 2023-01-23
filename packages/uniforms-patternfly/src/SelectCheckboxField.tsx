/*
 * Copyright 2023 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import { useMemo } from "react";
import { Checkbox, CheckboxProps, Radio, RadioProps } from "@patternfly/react-core";
import { connectField, FieldProps, filterDOMProps } from "uniforms";

function xor<T>(item: T, array: T[]) {
  const index = array.indexOf(item);
  if (index === -1) {
    return array.concat([item]);
  }

  return array.slice(0, index).concat(array.slice(index + 1));
}

type CheckboxesProps = FieldProps<
  string | string[],
  CheckboxProps | RadioProps,
  {
    fieldType?: typeof Array | any;
    onChange: (value?: string | string[]) => void;
    transform?: (value?: string) => string;
    allowedValues: string[];
    id?: string;
    disabled?: boolean;
  }
>;

filterDOMProps.register("autoValue");

function SelectCheckboxField(props: CheckboxesProps) {
  const Group = useMemo(() => (props.fieldType === Array ? Checkbox : Radio), [props]);

  return (
    <div {...filterDOMProps(props)}>
      {props.label && <label>{props.label}</label>}
      {props.allowedValues!.map((item: string, index: number) => {
        return (
          <React.Fragment key={index}>
            <label htmlFor={props.id}>{props.transform ? props.transform(item) : item}</label>
            <Group
              id={`${props.id}-${item}`}
              isDisabled={props.disabled}
              name={props.name}
              aria-label={props.name}
              value={props.value}
              isChecked={
                props.fieldType === Array && Array.isArray(props.value)
                  ? props.value!.includes(item)
                  : props.value === item
              }
              onChange={() => {
                props.onChange(props.fieldType === Array && Array.isArray(props.value) ? xor(item, props.value) : item);
              }}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default connectField<CheckboxesProps>(SelectCheckboxField);
