const helpers = {
  init({ wrapper = null, expect = null } = {}) {
    return {
      select(text, input) {
        const el = wrapper.find(input);

        el.element.value = text;
        el.trigger('change');

        return this;
      },
      type(text, input) {
        const el = wrapper.find(input);

        el.element.value = text;
        el.trigger('input');

        return this;
      },
      blur(selector) {
        wrapper.find(selector).trigger('blur');

        return this;
      },
      submit(selector) {
        wrapper.find(selector).trigger('submit');

        return this;
      },
      clear(input) {
        wrapper.find(input).element.value = '';
        wrapper.find(input).trigger('input');

        return this;
      },
      click(selector) {
        wrapper.find(selector).trigger('click');

        return this;
      },
      emit(evt, selector) {
        if (selector) {
          wrapper.find(selector).vm.$emit(evt);
        } else {
          wrapper.vm.$emit(evt);
        }

        return this;
      },
      emits(evt) {
        expect(wrapper.emitted()[evt]).toBeTruthy();

        return this;
      },
      doesNotEmit(evt) {
        expect(wrapper.emitted()[evt]).toBeFalsy();

        return this;
      },
      payloadEquals(evt, payload) {
        expect(wrapper.emitted()[evt][0][0]).toEqual(payload);

        return this;
      },
      contains(selector) {
        expect(wrapper.contains(selector)).toBeTruthy();

        return this;
      },
      doesNotContain(selector) {
        expect(wrapper.contains(selector)).toBeFalsy();

        return this;
      },
      matches(selector = null) {
        if (selector) {
          expect(wrapper.find(selector).html()).toMatchSnapshot();
        } else {
          expect(wrapper.html()).toMatchSnapshot();
        }

        return this;
      },
      see(text, selector = null) {
        // make text lowercase
        const expectedContent =
          typeof text === 'string' ? text.toLowerCase() : null;

        if (selector) {
          expect(
            wrapper
              .find(selector)
              .text()
              .toLowerCase()
          ).toContain(expectedContent);
        } else {
          expect(wrapper.text().toLowerCase()).toContain(expectedContent);
        }

        return this;
      },
      html(html, selector = null) {
        if (selector) {
          expect(wrapper.find(selector).html()).toBe(html);
        } else {
          expect(wrapper.html()).toBe(html);
        }

        return this;
      },
      hasStyle(style, selector = null) {
        if (selector) {
          expect(wrapper.find(selector).attributes().style).toBe(style);
        } else {
          expect(wrapper.attributes().style).toBe(style);
        }

        return this;
      },
      isHidden(selector = null) {
        if (selector) {
          expect(wrapper.find(selector).attributes().style).toBe(
            'display: none;'
          );
        } else {
          expect(wrapper.attributes().style).toBe('display: none;');
        }

        return this;
      },
      isValidInput({ selector, validInput, btn, errorSelector } = {}) {
        this.contains(selector)
          .type(validInput, selector)
          .click(btn)
          .doesNotContain(errorSelector);

        return this;
      },
      isInvalidInput({
        selector,
        errorSelector,
        validInput,
        btn,
        message,
        invalidInput = null
      } = {}) {
        if (invalidInput) {
          this.contains(selector)
            .type(invalidInput, selector)
            .click(btn)
            .contains(errorSelector)
            .see(message, errorSelector)
            .type(validInput, selector)
            .click(btn)
            .doesNotContain(errorSelector);
        } else {
          this.contains(selector)
            .click(btn)
            .contains(errorSelector)
            .see(message, errorSelector)
            .type(validInput, selector)
            .click(btn)
            .doesNotContain(errorSelector);
        }

        return this;
      },
      hasCount(selector, count) {
        expect(wrapper.findAll(selector).length).toBe(count);

        return this;
      },
      hasClass(className, selector = null) {
        if (selector) {
          expect(wrapper.find(selector).classes()).toContain(className);
        } else {
          expect(wrapper.classes()).toContain(className);
        }

        return this;
      },
      notHaveClass(className, selector = null) {
        if (selector) {
          expect(wrapper.find(selector).classes()).not.toContain(className);
        } else {
          expect(wrapper.classes()).not.toContain(className);
        }

        return this;
      },
      text(content, selector = null) {
        if (selector) {
          expect(wrapper.find(selector).text()).toBe(content);
        } else {
          expect(wrapper.text()).toBe(content);
        }

        return this;
      },
      isDisabled(selector = null) {
        if (selector) {
          expect(wrapper.find(selector).attributes().disabled).toBeTruthy();
        } else {
          expect(wrapper.attributes().disabled).toBeTruthy();
        }

        return this;
      },
      isNotDisabled(selector = null) {
        if (selector) {
          expect(wrapper.find(selector).attributes().disabled).toBeFalsy();
        } else {
          expect(wrapper.attributes().disabled).toBeFalsy();
        }

        return this;
      }
    };
  }
};

export default helpers;
