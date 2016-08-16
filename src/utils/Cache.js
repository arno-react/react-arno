var Cache = (function (win) {
    var regStorageKey = /^localstorage\_\_\_(.*)$/;

    function namespace(key) {
        return 'localstorage___' + key;
    }

    function isExpires(expires) {
        var now = +new Date();

        if (!expires) {
            return false;
        }

        if (now > parseInt(expires, 10)) {
            return true;
        }

        return false;
    }

    function clear() {
        for (var key in win.localStorage) {
            if (regStorageKey.test(key)) {
                win.localStorage.removeItem(key);
            }

        }
        return this;
    }

    function removeItem(key) {
        win.localStorage.removeItem(namespace(key));
        return this;
    }

    function parse(value) {
        try {
            value = JSON.parse(value);
        }
        catch (err) {
            return value;
        }
        return value;
    }

    function stringify(value) {
        return JSON.stringify(value);
    }

    function getItem(key) {
        var item = win.localStorage.getItem(namespace(key));
        if (!item) {
            return '';
        }

        if (item = parse(item)) {
            // 如果过期了，那么就返回空字符串
            if (isExpires(item['expires'])) {
                this.remove(key);
                return '';
            }

            return parse(item['val']);
        }

        return '';
    }

    function setItem(key, value, expires) {
        if (!key) {
            return this;
        }

        expires = expires || 0;

        var now = +new Date(),
            localKey = namespace(key);

        if (typeof value === 'object') {
            value = stringify(value);
        }

        win.localStorage.setItem(localKey, stringify({
            'val': value,
            'expires': expires ? expires * 1000 + now : ''
        }));

        return this;
    }

    function expires(key, seconds) {
        if (!seconds) {
            return this;
        }

        var item = this.get(key);

        if (!item || !item['val']) {
            return this;
        }

        this.put(key, item['val'], seconds);

        return this;
    }

    function initCheck() {
        for (var key in win.localStorage) {
            if (regStorageKey.test(key)) {
                var item = win.localStorage.getItem(key);
                item = parse(item);

                if (!item) {
                    continue;
                }

                if (isExpires(item['expires'])) {
                    removeItem(key);
                }
            }

        }
    }

    // 立即检查localStorage过期情况
    initCheck();

    return {
        get: getItem,
        put: setItem,
        remove: removeItem,
        clear: clear,
        expires: expires
    };

})(window);

export default Cache;
