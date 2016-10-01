/*
 * Copyright (c) 2014,2015,2016 Ahome' Innovation Technologies. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.ait.lienzo.test.translator;

import com.ait.lienzo.test.settings.Settings;

/**
 * Translator interceptors that requires any of the settings values must implement this class.
 * 
 * The Settings instance is ensured to be set before any interception call is fired.
 *
 * @author Roger Martinez
 * @since 1.0
 *
 */
public interface HasSettings
{
    void useSettings(Settings settings);
}
