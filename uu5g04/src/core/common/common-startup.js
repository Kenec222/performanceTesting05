/**
 * Copyright (C) 2019 Unicorn a.s.
 *
 * This program is free software; you can use it under the terms of the UAF Open License v01 or
 * any later version. The text of the license is available in the file LICENSE or at www.unicorn.com.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even
 * the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See LICENSE for more details.
 *
 * You may contact Unicorn a.s. at address: V Kapslovne 2767/2, Praha 3, Czech Republic or
 * at the email: info@unicorn.com.
 *
 */

/* eslint-disable uu5/import-order */
import "./normalize.less";
import "./common.less";
import "./font-size.less";
import "./internal/bg-styles.js";
import "./css.js"; // must be done in startup because it creates <style /> element and we need this to be done during startup, not later
import "./color-schema.less";
