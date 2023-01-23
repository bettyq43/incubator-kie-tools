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

import { Context, randomIds, BaseForm, BaseFormProps, BaseFormState } from "uniforms";

import createSchema from "./_createSchema";
import * as React from "react";

const randomId = randomIds();

export default function createContext(schema?: {}, context?: Partial<Context<any>>): { context: Context<any> } {
  return {
    context: {
      changed: false,
      changedMap: {},
      error: null,
      model: {},
      name: [],
      onChange() {},
      onSubmit() {},
      randomId,
      submitting: false,
      validating: false,
      submitted: false,
      schema: createSchema(schema),
      ...context,
      state: {
        disabled: false,
        label: false,
        placeholder: false,
        showInlineError: false,
        readOnly: false,
      },
    } as any,
  };
}
