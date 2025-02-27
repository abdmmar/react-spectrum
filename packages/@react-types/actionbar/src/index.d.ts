/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {CollectionBase, DOMProps, StyleProps} from '@react-types/shared';
import {Key, ReactNode} from 'react';

export interface ActionBarProps<T> extends CollectionBase<T> {
  /** The number of selected items that the ActionBar is currently linked to. If 0, the ActionBar is hidden. */
  selectedItemCount: number | 'all',
  /** Handler that is called when the ActionBar clear button is pressed. */
  onClearSelection: () => void,
  /** Whether the ActionBar should be displayed with a emphasized style. */
  isEmphasized?: boolean,
  /** Handler that is called when an ActionBar button is pressed. */
  onAction?: (key: Key) => void
}

export interface SpectrumActionBarProps<T> extends ActionBarProps<T>, DOMProps, StyleProps {}

interface ActionBarContainerProps {
  /** The contents of the ActionBarContainer. Should include a ActionBar and the renderable content it is associated with. */
  children: ReactNode
}

export interface SpectrumActionBarContainerProps extends ActionBarContainerProps, DOMProps, StyleProps {}
