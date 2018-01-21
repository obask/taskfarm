import {debugGetJson, debugPostJson} from "./debugLib";
import invariant from 'fbjs/lib/invariant';

const DEBUG_MODE = true

export const startsWith = function startsWith(searchString, str) {
    return str.indexOf(searchString) === 0;
}

export const ajaxGetJson = function (url0, data, successCallback) {
    if (DEBUG_MODE) {
        setTimeout(
            () => successCallback(debugGetJson(url0)),
            100
        )
        return
    }
    const _ajaxErrorCallback = function (xhr, status, err) {
        throw Error("ajaxGetJson: " + url0 + " " + status + " " + err)
    }
    const request = new XMLHttpRequest();
    const query = [];
    for (const key in data) {
        if (data.hasOwnProperty(key) && data[key] !== undefined) {
            const elem = data[key];
            if (typeof(ss) === "object" && "forEach" in elem) {
                elem.forEach(function (value) {
                    query.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
                })
            } else {
                query.push(encodeURIComponent(key) + '=' + encodeURIComponent(elem))
            }
        }
    }
    const urlQuery = url0 + (query.length ? '?' + query.join('&') : '')
    request.open('GET', urlQuery, true)
    request.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status >= 200 && this.status < 400) {
                successCallback(JSON.parse(this.responseText))
            } else {
                _ajaxErrorCallback(this, this.status, this.statusText)
            }
        }
    }
    request.onerror = _ajaxErrorCallback;
    request.send()
}

export const ajaxPostJson = function (url0, jsondata, successCallback) {
    if (DEBUG_MODE) {
        setTimeout(
            () => successCallback(debugPostJson(url0)),
            100
        )
        return
    }

    const _ajaxErrorCallback = function (xhr, status, err) {
        throw Error("ajaxPostJson: " + url0 + " " + status + " " + err)
    }
    const request = new XMLHttpRequest()
    request.open("POST", url0)
    request.setRequestHeader('Content-Type', 'application/json')
    request.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status >= 200 && this.status < 400) {
                successCallback(JSON.parse(this.responseText))
            } else {
                _ajaxErrorCallback(this, this.status, this.statusText)
            }
        }
    }
    request.onerror = _ajaxErrorCallback;
    request.send(JSON.stringify(jsondata))
}

export const addOrRemoveClass = function (elem, className) {
    if (elem.className.indexOf(className) === -1) {
        elem.className += " " + className;
    } else {
        elem.className = elem.className.replace(" " + className, "")
    }
}

const loggedTypeFailures = {}

export function customCheckPropTypes(typeSpecs, values) {
    for (var typeSpecName in typeSpecs) {
        if (typeSpecs.hasOwnProperty(typeSpecName)) {
            var error;
            // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                invariant(typeof typeSpecs[typeSpecName] === 'function', 'type ' + typeSpecName +
                    ' is invalid; it must be a function, usually from the `prop-types` package.');
                error = typeSpecs[typeSpecName](values, typeSpecName, 'customCheckPropTypes', "item", null,
                    'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
                );
            } catch (ex) {
                error = ex;
            }
            if (!(!error || error instanceof Error)) {
                throw new Error('%s: type specification of %s `' + typeSpecName + '` is invalid; the type checker ' +
                    'function must return `null` or an `Error` but returned a ' + typeof error + '.' +
                    'You may have forgotten to pass an argument to the type checker ' +
                    'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).')
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error.message] = true;

                throw new Error(error.message);
            }
        }
    }
}
