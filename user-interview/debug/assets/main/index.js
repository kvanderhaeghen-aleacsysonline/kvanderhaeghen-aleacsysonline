System.register("chunks:///_virtual/array.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        flatMap: flatMap,
        shuffle: shuffle
      });
      cclegacy._RF.push({}, "d1a7033C2tJcL1WLgrADQ5P", "array", undefined);
      function flatMap(array, callback) {
        var _Array$prototype;
        return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, array.map(callback));
      }
      function shuffle(array) {
        var currentIndex = array.length,
          randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          // And swap it with the current element.
          var _ref = [array[randomIndex], array[currentIndex]];
          array[currentIndex] = _ref[0];
          array[randomIndex] = _ref[1];
        }
        return array;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/arrayUtils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('flatten', flatten);
      cclegacy._RF.push({}, "2eb41OkBtFEN6gDz7fhG8ge", "arrayUtils", undefined);
      function flatten(arr) {
        return arr.reduce(function (acc, val) {
          return acc.concat(val);
        }, []);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/audioComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './gameClasses.ts', './eventSignals.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioSource, Component, GodAudio, respinTriggerSignal;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Component = module.Component;
    }, function (module) {
      GodAudio = module.GodAudio;
    }, function (module) {
      respinTriggerSignal = module.respinTriggerSignal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "bbdc1jIgclIrIqfqWP59qY+", "audioComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent;
      var AudioComponent = exports('AudioComponent', (_dec = ccclass('AudioComponent'), _dec2 = requireComponent(AudioSource), _dec3 = property([GodAudio]), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AudioComponent, _Component);
        function AudioComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "godFeatureComponent", _descriptor, _assertThisInitialized(_this));
          _this.audioSource = void 0;
          _this.respinTriggerBind = _this.respinTriggerHandler.bind(_assertThisInitialized(_this));
          return _this;
        }
        var _proto = AudioComponent.prototype;
        _proto.onLoad = function onLoad() {
          this.audioSource = this.getComponent(AudioSource);
          respinTriggerSignal.addListener(this.respinTriggerBind);
        };
        _proto.onDestroy = function onDestroy() {
          respinTriggerSignal.removeListener(this.respinTriggerBind);
        };
        _proto.respinTriggerHandler = function respinTriggerHandler(args) {
          var _this2 = this;
          var _loop = function _loop(i) {
            var godAudio = _this2.godFeatureComponent.find(function (g) {
              return g.type === args.godTypes[i];
            });
            if (!godAudio) {
              return 1; // continue
            }

            _this2.audioSource.playOneShot(godAudio.audioClip);
          };
          for (var i = 0; i < args.godTypes.length; i++) {
            if (_loop(i)) continue;
          }
        };
        return AudioComponent;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "godFeatureComponent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/backgroundAudioComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './gameClasses.ts', './eventSignals.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioSource, Button, SpriteFrame, Component, BackGroundAudio, setRoundTypeSignal;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      Button = module.Button;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      BackGroundAudio = module.BackGroundAudio;
    }, function (module) {
      setRoundTypeSignal = module.setRoundTypeSignal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "32a47m7TLJMMbkTQLMzbK6N", "backgroundAudioComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent;
      var BackgroundAudioComponent = exports('BackgroundAudioComponent', (_dec = ccclass('BackgroundAudioComponent'), _dec2 = requireComponent(AudioSource), _dec3 = property([BackGroundAudio]), _dec4 = property(Button), _dec5 = property([SpriteFrame]), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BackgroundAudioComponent, _Component);
        function BackgroundAudioComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "backgroundAmbient", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "soundButton", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggleFrames", _descriptor3, _assertThisInitialized(_this));
          _this.audioSource = void 0;
          _this.isMute = false;
          _this.setRoundTypeBind = _this.setRoundTypeHandler.bind(_assertThisInitialized(_this));
          return _this;
        }
        var _proto = BackgroundAudioComponent.prototype;
        _proto.onLoad = function onLoad() {
          this.audioSource = this.getComponent(AudioSource);
          setRoundTypeSignal.addListener(this.setRoundTypeBind);
          this.changeSpriteFrames(this.toggleFrames[Number(this.isMute)]);
        };
        _proto.changeSpriteFrames = function changeSpriteFrames(frame) {
          this.soundButton.hoverSprite = frame;
          this.soundButton.normalSprite = frame;
          this.soundButton.pressedSprite = frame;
          this.soundButton.disabledSprite = frame;
        };
        _proto.onDestroy = function onDestroy() {
          setRoundTypeSignal.removeListener(this.setRoundTypeBind);
        };
        _proto.setRoundTypeHandler = function setRoundTypeHandler(args) {
          var _this$backgroundAmbie;
          this.audioSource.stop();
          var track = (_this$backgroundAmbie = this.backgroundAmbient.find(function (item) {
            return item.type === args.roundType;
          })) != null ? _this$backgroundAmbie : this.backgroundAmbient[0];
          this.audioSource.clip = track.audioClip;
          if (this.isMute) {
            return;
          }
          this.audioSource.play();
        };
        _proto.soundButtonPressed = function soundButtonPressed() {
          this.isMute = !this.isMute;
          this.changeSpriteFrames(this.toggleFrames[Number(this.isMute)]);
          if (this.isMute) {
            this.audioSource.pause();
            return;
          }
          this.audioSource.play();
        };
        return BackgroundAudioComponent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backgroundAmbient", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "soundButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toggleFrames", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/backgroundComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './eventSignals.ts', './gameClasses.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Component, setRoundTypeSignal, RoundBackground;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      setRoundTypeSignal = module.setRoundTypeSignal;
    }, function (module) {
      RoundBackground = module.RoundBackground;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f27b804sF1K+LrPRivmUiXp", "backgroundComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var backgroundComponent = exports('backgroundComponent', (_dec = ccclass('backgroundComponent'), _dec2 = property([RoundBackground]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(backgroundComponent, _Component);
        function backgroundComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Backgrounds", _descriptor, _assertThisInitialized(_this));
          _this.setRoundTypeBind = _this.setRoundTypeHandler.bind(_assertThisInitialized(_this));
          return _this;
        }
        var _proto = backgroundComponent.prototype;
        _proto.onLoad = function onLoad() {
          setRoundTypeSignal.addListener(this.setRoundTypeBind);
        };
        _proto.onDestroy = function onDestroy() {
          setRoundTypeSignal.removeListener(this.setRoundTypeBind);
        };
        _proto.setRoundTypeHandler = function setRoundTypeHandler(roundType) {
          var background = this.Backgrounds.find(function (item) {
            return item.type === roundType.roundType;
          });
          if (!background) {
            return;
          }
          this.node.getComponent(Sprite).spriteFrame = background.texture;
        };
        return backgroundComponent;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Backgrounds", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bonusBuyComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './eventSignals.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, bonusBuyTestSignal;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      bonusBuyTestSignal = module.bonusBuyTestSignal;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "add75qThzVI/5eHK4kIAUhV", "bonusBuyComponent", undefined);
      var ccclass = _decorator.ccclass;
      var BonusBuyComponent = exports('BonusBuyComponent', (_dec = ccclass('BonusBuyComponent'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BonusBuyComponent, _Component);
        function BonusBuyComponent() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = BonusBuyComponent.prototype;
        _proto.onClick = function onClick() {
          bonusBuyTestSignal.dispatch();
        };
        return BonusBuyComponent;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bonusItemModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './bonusTypes.ts', './jackpotTypes.ts', './coinComponent.ts', './eventSignals.ts', './bonusSideType.ts', './moveCoins.ts', './resolvablePromise.ts', './coinData.ts', './roundTypes.ts', './gameplayModel.ts', './gameData.ts', './wait.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, Label, Prefab, instantiate, tween, Vec3, Component, BonusItemTypes, BonusModifierTypes, respinnableModifierTypes, respinnableJackpotTypes, jackpotTypeToTriggerType, CoinComponent, moveCoinCompleteSignal, bonusActivateItemSignal, BonusSideType, bonusSideTypeToGodFeatureType, moveFeatureCoins, moveJackpotCoins, ResolvablePromise, CoinTypes, RoundTypes, GameplayModel, gameData, wait;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Label = module.Label;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      BonusItemTypes = module.BonusItemTypes;
      BonusModifierTypes = module.BonusModifierTypes;
      respinnableModifierTypes = module.respinnableModifierTypes;
      respinnableJackpotTypes = module.respinnableJackpotTypes;
    }, function (module) {
      jackpotTypeToTriggerType = module.jackpotTypeToTriggerType;
    }, function (module) {
      CoinComponent = module.CoinComponent;
    }, function (module) {
      moveCoinCompleteSignal = module.moveCoinCompleteSignal;
      bonusActivateItemSignal = module.bonusActivateItemSignal;
    }, function (module) {
      BonusSideType = module.BonusSideType;
      bonusSideTypeToGodFeatureType = module.bonusSideTypeToGodFeatureType;
    }, function (module) {
      moveFeatureCoins = module.moveFeatureCoins;
      moveJackpotCoins = module.moveJackpotCoins;
    }, function (module) {
      ResolvablePromise = module.ResolvablePromise;
    }, function (module) {
      CoinTypes = module.CoinTypes;
    }, function (module) {
      RoundTypes = module.RoundTypes;
    }, function (module) {
      GameplayModel = module.GameplayModel;
    }, function (module) {
      gameData = module.gameData;
    }, function (module) {
      wait = module.wait;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "fe478HbBWxHc6X8xFFVtLeh", "bonusItemModel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BonusItemModel = exports('BonusItemModel', (_dec = ccclass('BonusItemModel'), _dec2 = property({
        type: Enum(BonusItemTypes)
      }), _dec3 = property({
        type: Enum(BonusModifierTypes),
        visible: function visible() {
          return this.itemType === BonusItemTypes.Modifier;
        }
      }), _dec4 = property(Label), _dec5 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BonusItemModel, _Component);
        function BonusItemModel() {
          var _this$multiplyValue, _this$initFromType, _this$moveCoinHandler;
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.gameplayModel = null;
          _initializerDefineProperty(_this, "itemType", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "modifierType", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "valueLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mysteryPrefab", _descriptor4, _assertThisInitialized(_this));
          _this.sideType = BonusSideType.Center;
          _this.mysteryNode = null;
          _this.coinComponent = void 0;
          _this.jackpotType = void 0;
          _this.multiplyValue = (_this$multiplyValue = {}, _this$multiplyValue[BonusItemTypes.Cash] = function (multiplier) {
            var cash = _this.getLabelValue(true) + multiplier;
            _this.cashValue = cash;
            return true;
          }, _this$multiplyValue[BonusItemTypes.Modifier] = function (multiplier) {
            if (_this.modifierType === BonusModifierTypes.CoinCollector) {
              var cash = _this.getLabelValue(false) * 0.01 * multiplier;
              _this.coinCollectorValue = cash;
              return true;
            }
            return false;
          }, _this$multiplyValue[BonusItemTypes.Jackpot] = function (multiplier) {
            var cash = _this.getLabelValue(false) * 0.01 * multiplier;
            _this.jackpotValue = cash;
            return true;
          }, _this$multiplyValue[BonusItemTypes.None] = function () {
            return false;
          }, _this$multiplyValue);
          _this.initFromType = (_this$initFromType = {}, _this$initFromType[BonusItemTypes.None] = function () {}, _this$initFromType[BonusItemTypes.Cash] = function (data) {
            _this.cashValue = data.cashValue;
            // this.cashValue = data.cashValue * 0.01;
          }, _this$initFromType[BonusItemTypes.Modifier] = function (data) {
            if (data.modifierType === BonusModifierTypes.StickyMultiplier) {
              _this.multiplierValue = data.multiplierValue;
            } else if (data.modifierType === BonusModifierTypes.MainMultiplier) {
              var godFeatureType = bonusSideTypeToGodFeatureType[_this.sideType];
              if (!godFeatureType) {
                console.warn("God feature type is undefined, because of side type " + _this.sideType);
                return;
              }
              var godCoin = _this.gameplayModel.godCoins.find(function (godCoin) {
                return godCoin.type === godFeatureType;
              });
              var instance = instantiate(godCoin.prefab);
              instance.setParent(_this.node);
              instance.setSiblingIndex(0);
              _this.coinComponent = instance.getComponent(CoinComponent);
            }
          }, _this$initFromType[BonusItemTypes.Jackpot] = function (data) {
            var _this$gameplayModel$j;
            if (!_this.gameplayModel) {
              _this.gameplayModel = _this.node.scene.getComponentInChildren(GameplayModel);
            }
            var jackpotCoin = (_this$gameplayModel$j = _this.gameplayModel.jackpotCoins.find(function (coin) {
              return coin.type === data.jackpotType;
            })) == null ? void 0 : _this$gameplayModel$j.prefab;
            _this.jackpotType = data.jackpotType;
            var instance = instantiate(jackpotCoin);
            instance.setParent(_this.node);
            instance.setSiblingIndex(0);
            _this.coinComponent = instance.getComponent(CoinComponent);
            _this.jackpotValue = data.cashValue * 0.01;
            _this.valueLabelVisible = false;
          }, _this$initFromType);
          _this.moveCoinCompleteBind = _this.moveCoinCompleteHandler.bind(_assertThisInitialized(_this));
          _this.activatePromiseResolve = new ResolvablePromise();
          _this.moveCoinHandler = (_this$moveCoinHandler = {}, _this$moveCoinHandler[BonusModifierTypes.MainMultiplier] = function (playfieldModel, roundType) {
            moveFeatureCoins(playfieldModel.featureCoinDropPositions, roundType, _this.coinComponent ? [_this.coinComponent.featureType] : undefined);
          }, _this$moveCoinHandler[BonusItemTypes.Jackpot] = function (playfieldModel, roundType) {
            moveJackpotCoins(playfieldModel.jackpotCoinDropPositions, roundType, _this.coinComponent ? [_this.coinComponent.jackpotType] : undefined);
          }, _this$moveCoinHandler);
          return _this;
        }
        var _proto = BonusItemModel.prototype;
        //In eurocents
        _proto.getLabelValue = function getLabelValue(isMultiplierValue) {
          var _this$valueLabel$stri, _this$valueLabel;
          var rawString = (_this$valueLabel$stri = (_this$valueLabel = this.valueLabel) == null ? void 0 : _this$valueLabel.string) != null ? _this$valueLabel$stri : '';
          var cleanedString = rawString.replace('€', '').replace('X', '').replace(/,/g, '');
          var numericValue = parseFloat(cleanedString);
          return (isNaN(numericValue) ? 0 : numericValue) * (isMultiplierValue ? 1 : 100);
        }
        // In euros
        ;

        _proto.multiplyCashValue = function multiplyCashValue(multiplier) {
          return this.multiplyValue[this.itemType](multiplier);
        };
        _proto.onLoad = function onLoad() {
          moveCoinCompleteSignal.addListener(this.moveCoinCompleteBind);
        };
        _proto.onDestroy = function onDestroy() {
          moveCoinCompleteSignal.removeListener(this.moveCoinCompleteBind);
        };
        _proto.init = function init(sideType, data) {
          this.sideType = sideType;
          this.initFromType[this.itemType](data);
          if (sideType === BonusSideType.Center) {
            this.createMysterySprite();
          }
        };
        _proto.createMysterySprite = function createMysterySprite() {
          if (this.mysteryPrefab) {
            this.mysteryNode = instantiate(this.mysteryPrefab);
            this.mysteryNode.setParent(this.node);
          }
        };
        _proto.animateMysterySprite = function animateMysterySprite(completedCallback) {
          var _this2 = this;
          if (!this.mysteryNode) {
            return;
          }
          wait(500).then(function () {
            tween(_this2.mysteryNode).to(0.5, {
              scale: new Vec3(1, 0, 1)
            }, {
              easing: 'quadOut'
            }).call(function () {
              completedCallback();
            }).start();
          });
        };
        _proto.reset = function reset() {
          var _this$coinComponent, _this$mysteryNode;
          (_this$coinComponent = this.coinComponent) == null || _this$coinComponent.destroyCoin();
          this.coinComponent = undefined;
          (_this$mysteryNode = this.mysteryNode) == null || _this$mysteryNode.destroy();
          this.mysteryNode = undefined;
        };
        _proto.activate = function activate(roundType, playfieldModel) {
          var _this3 = this;
          var resolvePromise = new ResolvablePromise();
          if (this.mysteryNode) {
            this.animateMysterySprite(function () {
              resolvePromise.resolve();
            });
          } else {
            resolvePromise.resolve();
          }
          resolvePromise.promise.then(function () {
            var isRespinnable = respinnableModifierTypes.includes(_this3.modifierType) || respinnableJackpotTypes.includes(_this3.jackpotType);
            _this3.activatePromiseResolve.promise.then(function () {
              if (!respinnableJackpotTypes.includes(_this3.jackpotType)) {
                bonusActivateItemSignal.dispatch({
                  item: _this3,
                  amount: _this3.modifierType === BonusModifierTypes.MainMultiplier ? gameData.bonus.mainMultipliers.increaseCount : _this3.getLabelValue(_this3.itemType === BonusItemTypes.Cash)
                });
              }
            });
            if (isRespinnable && playfieldModel) {
              var _this3$modifierType;
              _this3.moveCoinHandler[(_this3$modifierType = _this3.modifierType) != null ? _this3$modifierType : _this3.itemType](playfieldModel, roundType);
            } else {
              _this3.activatePromiseResolve.resolve();
            }
          });
        };
        _proto.moveCoinCompleteHandler = function moveCoinCompleteHandler(args) {
          var _this$coinComponent2;
          if (!this.coinComponent && args.coinData.coinType !== CoinTypes.God && args.coinData.id !== ((_this$coinComponent2 = this.coinComponent) == null || (_this$coinComponent2 = _this$coinComponent2.node) == null ? void 0 : _this$coinComponent2.uuid) && args.roundType !== RoundTypes.Bonus) {
            return;
          }
          this.activatePromiseResolve.resolve();
        };
        _createClass(BonusItemModel, [{
          key: "jackpotTriggerType",
          get: function get() {
            return jackpotTypeToTriggerType[this.jackpotType];
          }
          // Don't draw when there is already an item, unless the item is a main multiplier or none
        }, {
          key: "canRedrawItem",
          get: function get() {
            return respinnableModifierTypes.includes(this.modifierType) || respinnableJackpotTypes.includes(this.jackpotType) || [BonusItemTypes.None, undefined].includes(this.itemType);
          }
        }, {
          key: "cashValue",
          set: function set(value) {
            // this.valueLabel!.string = '€' + value.toFixed(2);
            this.valueLabel.string = value.toFixed(2);
          }
        }, {
          key: "multiplierValue",
          set: function set(value) {
            if (!this.valueLabel) {
              console.warn('Value label is undefined');
              return;
            }
            this.valueLabel.string = 'X' + '\n' + value.toFixed(2);
          }
        }, {
          key: "coinCollectorValue",
          set: function set(value) {
            this.valueLabel.string = '€' + value.toFixed(2);
          }
        }, {
          key: "jackpotValue",
          set: function set(value) {
            if (!this.valueLabel) {
              console.warn('Value label is undefined');
              return;
            }
            this.valueLabel.string = '€' + value.toFixed(2);
          }
        }, {
          key: "valueLabelVisible",
          get: function get() {
            if (!this.valueLabel) {
              return false;
            }
            return this.valueLabel.node.active;
          },
          set: function set(visible) {
            if (!this.valueLabel) {
              console.warn('Value label is undefined');
              return;
            }
            this.valueLabel.node.active = visible;
          }
        }]);
        return BonusItemModel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BonusItemTypes.None;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "modifierType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return undefined;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "valueLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return undefined;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "mysteryPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bonusModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './gameClasses.ts', './array.ts', './bonusTypes.ts', './jackpotTypes.ts', './eventSignals.ts', './commonAnimations.ts', './bonusSideType.ts', './hudModel.ts', './bonusRollComponent.ts', './reelStatus.ts', './wait.ts', './reelsData.ts', './randomizer.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createClass, cclegacy, _decorator, CCFloat, CCBoolean, Component, BonusItem, BonusSpins, BonusMainMultiplier, shuffle, BonusItemTypes, BonusModifierTypes, itemsWithValue, JackpotTypes, JackpotTriggerTypes, bonusActivateItemSignal, scaleFadeAnimation, BonusSideType, bonusSideTypeToGodFeatureType, HudModel, BonusRollComponent, ReelStatus, wait, reelsData, createWeightedArray;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCFloat = module.CCFloat;
      CCBoolean = module.CCBoolean;
      Component = module.Component;
    }, function (module) {
      BonusItem = module.BonusItem;
      BonusSpins = module.BonusSpins;
      BonusMainMultiplier = module.BonusMainMultiplier;
    }, function (module) {
      shuffle = module.shuffle;
    }, function (module) {
      BonusItemTypes = module.BonusItemTypes;
      BonusModifierTypes = module.BonusModifierTypes;
      itemsWithValue = module.itemsWithValue;
    }, function (module) {
      JackpotTypes = module.JackpotTypes;
      JackpotTriggerTypes = module.JackpotTriggerTypes;
    }, function (module) {
      bonusActivateItemSignal = module.bonusActivateItemSignal;
    }, function (module) {
      scaleFadeAnimation = module.scaleFadeAnimation;
    }, function (module) {
      BonusSideType = module.BonusSideType;
      bonusSideTypeToGodFeatureType = module.bonusSideTypeToGodFeatureType;
    }, function (module) {
      HudModel = module.HudModel;
    }, function (module) {
      BonusRollComponent = module.BonusRollComponent;
    }, function (module) {
      ReelStatus = module.ReelStatus;
    }, function (module) {
      wait = module.wait;
    }, function (module) {
      reelsData = module.reelsData;
    }, function (module) {
      createWeightedArray = module.createWeightedArray;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "b82a4iZloJKLqOR7Jpki0/Y", "bonusModel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BonusModel = exports('BonusModel', (_dec = ccclass('BonusModel'), _dec2 = property([BonusItem]), _dec3 = property([BonusSpins]), _dec4 = property([BonusMainMultiplier]), _dec5 = property(CCFloat), _dec6 = property(CCFloat), _dec7 = property(CCFloat), _dec8 = property(CCFloat), _dec9 = property(CCFloat), _dec10 = property(CCBoolean), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BonusModel, _Component);
        function BonusModel() {
          var _this$previousResultC, _this$bonusResult, _this$bonusSpinsPerSi, _this$drawItemRollWei, _this$drawItemResultW, _this$cheatModifierRe, _this$cheatJackpotRes, _this$drawModifierWei, _this$cheatModifierWe, _this$drawJackpotWeig, _this$totalCashPerTyp, _this$activateItems;
          var _this;
          for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
            _args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(_args)) || this;
          _this.hudModel = null;
          _initializerDefineProperty(_this, "bonusItems", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bonusSpins", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainMultipliers", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startPosY", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "endPosY", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stopPosY", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rollSpeed", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rollTensionSpeed", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "reverse", _descriptor9, _assertThisInitialized(_this));
          _this.isBonusAvailable = false;
          _this.previousResultCount = (_this$previousResultC = {}, _this$previousResultC[BonusSideType.Left] = 0, _this$previousResultC[BonusSideType.Center] = 0, _this$previousResultC[BonusSideType.Right] = 0, _this$previousResultC);
          _this.bonusResult = (_this$bonusResult = {}, _this$bonusResult[BonusSideType.Left] = [], _this$bonusResult[BonusSideType.Center] = [], _this$bonusResult[BonusSideType.Right] = [], _this$bonusResult);
          _this.bonusSpinsPerSide = (_this$bonusSpinsPerSi = {}, _this$bonusSpinsPerSi[BonusSideType.Left] = undefined, _this$bonusSpinsPerSi[BonusSideType.Center] = undefined, _this$bonusSpinsPerSi[BonusSideType.Right] = undefined, _this$bonusSpinsPerSi);
          _this.onBonusActivateItemBind = _this.onBonusActivateItemHandler.bind(_assertThisInitialized(_this));
          _this.drawItemRollWeights = (_this$drawItemRollWei = {}, _this$drawItemRollWei[BonusItemTypes.None] = 120, _this$drawItemRollWei[BonusItemTypes.Cash] = 30, _this$drawItemRollWei[BonusItemTypes.Jackpot] = 20, _this$drawItemRollWei[BonusItemTypes.Modifier] = 20, _this$drawItemRollWei);
          _this.drawItemResultWeights = (_this$drawItemResultW = {}, _this$drawItemResultW[BonusItemTypes.None] = 350, _this$drawItemResultW[BonusItemTypes.Cash] = 50, _this$drawItemResultW[BonusItemTypes.Jackpot] = 20, _this$drawItemResultW[BonusItemTypes.Modifier] = 15, _this$drawItemResultW);
          _this.cheatModifierResultWeights = (_this$cheatModifierRe = {}, _this$cheatModifierRe[BonusItemTypes.None] = 300, _this$cheatModifierRe[BonusItemTypes.Cash] = 100, _this$cheatModifierRe[BonusItemTypes.Jackpot] = 1, _this$cheatModifierRe[BonusItemTypes.Modifier] = 100, _this$cheatModifierRe);
          _this.cheatJackpotResultWeights = (_this$cheatJackpotRes = {}, _this$cheatJackpotRes[BonusItemTypes.None] = 300, _this$cheatJackpotRes[BonusItemTypes.Cash] = 100, _this$cheatJackpotRes[BonusItemTypes.Jackpot] = 100, _this$cheatJackpotRes[BonusItemTypes.Modifier] = 1, _this$cheatJackpotRes);
          _this.drawModifierWeights = (_this$drawModifierWei = {}, _this$drawModifierWei[BonusModifierTypes.CoinCollector] = 10, _this$drawModifierWei[BonusModifierTypes.MainMultiplier] = 0, _this$drawModifierWei[BonusModifierTypes.StickyMultiplier] = 20, _this$drawModifierWei[BonusModifierTypes.RepeatCollector] = 0, _this$drawModifierWei);
          _this.cheatModifierWeights = (_this$cheatModifierWe = {}, _this$cheatModifierWe[BonusModifierTypes.CoinCollector] = 500, _this$cheatModifierWe[BonusModifierTypes.MainMultiplier] = 0, _this$cheatModifierWe[BonusModifierTypes.StickyMultiplier] = 1, _this$cheatModifierWe[BonusModifierTypes.RepeatCollector] = 0, _this$cheatModifierWe);
          _this.drawJackpotWeights = (_this$drawJackpotWeig = {}, _this$drawJackpotWeig[JackpotTypes.Unreal] = 60, _this$drawJackpotWeig[JackpotTypes.Divine] = 60, _this$drawJackpotWeig[JackpotTypes.Heroic] = 25, _this$drawJackpotWeig[JackpotTypes.Warlord] = 25, _this$drawJackpotWeig[JackpotTypes.Mythic] = 18, _this$drawJackpotWeig[JackpotTypes.Legendary] = 18, _this$drawJackpotWeig[JackpotTypes.Athena] = 10, _this$drawJackpotWeig[JackpotTypes.Ares] = 10, _this$drawJackpotWeig[JackpotTypes.Godlike] = 10, _this$drawJackpotWeig);
          _this.drawItems = [];
          _this.cheatCollectItems = [];
          _this.cheatJackpotItems = [];
          _this.drawItemsRoll = [];
          _this.drawModifiers = [];
          _this.cheatModifiers = [];
          _this.drawJackpots = [];
          _this.drawCashValueWeights = {
            0.5: 200,
            1: 100,
            1.5: 40,
            2: 20,
            2.5: 10,
            3: 5,
            5: 3,
            10: 2,
            20: 1
          };
          _this.drawMultiplierValueWeights = {
            1.5: 200,
            2: 100,
            2.5: 50,
            3: 25,
            4: 20,
            6: 10,
            8: 5,
            10: 3,
            15: 2,
            20: 1
          };
          _this.drawMultiplyCountWeights = {
            1: 25,
            2: 10,
            3: 2
          };
          _this.drawCashValues = [];
          _this.drawMultiplierValues = [];
          _this.drawMultiplyCount = [];
          _this.bonusRollComponents = [];
          _this.totalCashPerType = (_this$totalCashPerTyp = {}, _this$totalCashPerTyp[BonusItemTypes.Cash] = function (bonusItem) {
            var _bonusItem$getLabelVa;
            return ((_bonusItem$getLabelVa = bonusItem.getLabelValue(true)) != null ? _bonusItem$getLabelVa : 0) * _this.hudModel.stake;
          }, _this$totalCashPerTyp[BonusItemTypes.Modifier] = function (bonusItem) {
            if (bonusItem.modifierType === BonusModifierTypes.CoinCollector || bonusItem.modifierType === BonusModifierTypes.RepeatCollector) {
              var _bonusItem$getLabelVa2;
              return (_bonusItem$getLabelVa2 = bonusItem.getLabelValue(false)) != null ? _bonusItem$getLabelVa2 : 0;
            }
            return 0;
          }, _this$totalCashPerTyp[BonusItemTypes.Jackpot] = function (bonusItem) {
            if (bonusItem.valueLabelVisible) {
              var _bonusItem$getLabelVa3;
              return (_bonusItem$getLabelVa3 = bonusItem.getLabelValue(false)) != null ? _bonusItem$getLabelVa3 : 0;
            }
            return 0;
          }, _this$totalCashPerTyp[BonusItemTypes.None] = function () {
            return 0;
          }, _this$totalCashPerTyp);
          _this.excludedModifierItems = [{
            itemType: BonusItemTypes.Modifier,
            modifierType: BonusModifierTypes.CoinCollector
          }, {
            itemType: BonusItemTypes.Modifier,
            modifierType: BonusModifierTypes.RepeatCollector
          }];
          _this.activateItems = (_this$activateItems = {}, _this$activateItems[BonusItemTypes.None] = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })), _this$activateItems[BonusItemTypes.Cash] = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          })), _this$activateItems[BonusItemTypes.Modifier] = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(args) {
            var item, multiplier, totalAmount, currentAmount, _multiplier;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return wait(100);
                case 2:
                  if (!_this.allBonusRollsStopped) {
                    _context3.next = 0;
                    break;
                  }
                case 3:
                  item = args.item;
                  if (item.modifierType === BonusModifierTypes.StickyMultiplier) {
                    multiplier = args.amount * 0.01;
                    _this.multiplyCashItems(multiplier);
                  } else if (item.modifierType === BonusModifierTypes.CoinCollector || item.modifierType === BonusModifierTypes.RepeatCollector) {
                    totalAmount = _this.getTotalCashAmount(_this.excludedModifierItems) * 0.01;
                    currentAmount = item.getLabelValue(false) * 0.01;
                    item.coinCollectorValue = currentAmount + totalAmount;
                  } else if (item.modifierType === BonusModifierTypes.MainMultiplier) {
                    _multiplier = args.amount;
                    _this.addToMainMultiplier(bonusSideTypeToGodFeatureType[item.sideType], _multiplier);
                  }
                case 5:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })), _this$activateItems[BonusItemTypes.Jackpot] = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(args) {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (args.item.itemType === BonusItemTypes.Jackpot && args.item.jackpotTriggerType === JackpotTriggerTypes.CashGrab) {
                    args.item.valueLabelVisible = true;
                  }
                case 1:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          })), _this$activateItems);
          return _this;
        }
        var _proto = BonusModel.prototype;
        _proto.getMainMultiplier = function getMainMultiplier(godFeatureType) {
          var _this$mainMultipliers;
          return (_this$mainMultipliers = this.mainMultipliers.find(function (item) {
            return item.godFeatureType === godFeatureType;
          }).mainMultiplier) != null ? _this$mainMultipliers : 1;
        };
        _proto.getTotalMainMultiplier = function getTotalMainMultiplier() {
          return this.mainMultipliers.reduce(function (total, item) {
            return total + item.mainMultiplier;
          }, 1);
        };
        _proto.addToMainMultiplier = function addToMainMultiplier(godFeatureType, value) {
          this.mainMultipliers.find(function (item) {
            return item.godFeatureType === godFeatureType;
          }).mainMultiplier += value;
        };
        _proto.setAllMainMultipliers = function setAllMainMultipliers(value) {
          this.mainMultipliers.forEach(function (item) {
            item.mainMultiplier = value;
          });
        };
        _proto.setStartBonusSpins = function setStartBonusSpins(value) {
          this.bonusSpins.forEach(function (spin) {
            spin.spinsLeftCount = value;
            spin.spinsTotalCount = value;
          });
        };
        _proto.getTotalBonusSpinLeft = function getTotalBonusSpinLeft() {
          return this.bonusSpins.reduce(function (total, spin) {
            return total + spin.spinsLeftCount;
          }, 0);
        };
        _proto.getAllSidesFull = function getAllSidesFull(excluded) {
          var _this2 = this;
          if (excluded === void 0) {
            excluded = [BonusSideType.Center];
          }
          var keys = Object.values(BonusSideType).map(function (key) {
            return key;
          }).filter(function (key) {
            return !excluded.includes(key);
          });
          var isFull = true;
          keys.forEach(function (key) {
            if (!_this2.getBonusSpinsSideIsFull(key)) {
              isFull = false;
            }
          });
          return isFull;
        };
        _proto.setBonusSpinsLeftOfSide = function setBonusSpinsLeftOfSide(bonusSideType, value) {
          this.bonusSpinsPerSide[bonusSideType].spinsLeftCount = value;
        };
        _proto.subtractBonusSpinsLeftOfSide = function subtractBonusSpinsLeftOfSide(bonusSideType) {
          this.bonusSpinsPerSide[bonusSideType].spinsLeftCount -= 1;
        };
        _proto.getBonusSpinsLeftOfSide = function getBonusSpinsLeftOfSide(bonusSideType) {
          var _this$bonusSpinsPerSi2, _this$bonusSpinsPerSi3;
          return (_this$bonusSpinsPerSi2 = (_this$bonusSpinsPerSi3 = this.bonusSpinsPerSide[bonusSideType]) == null ? void 0 : _this$bonusSpinsPerSi3.spinsLeftCount) != null ? _this$bonusSpinsPerSi2 : -1;
        };
        _proto.getBonusSpinsSideIsFull = function getBonusSpinsSideIsFull(bonusSideType) {
          var filteredRowLengths = reelsData.columnIndicesPerSide[bonusSideType].map(function (columnId) {
            return reelsData.playFieldDimensions.rows[columnId].visible;
          });
          var totalRowsCount = filteredRowLengths.reduce(function (total, current) {
            return total + current;
          }, 0);
          var getFulledRowsCount = this.bonusResult[bonusSideType].filter(function (item) {
            return !item.canRedrawItem;
          }).length;
          return totalRowsCount === getFulledRowsCount;
        };
        _proto.onLoad = function onLoad() {
          var _this3 = this;
          this.generateItemsLists();
          this.generateValuesLists();
          this.bonusSpins.forEach(function (spin) {
            _this3.bonusSpinsPerSide[spin.sideType] = spin;
          });
          bonusActivateItemSignal.addListener(this.onBonusActivateItemBind);
        };
        _proto.onDestroy = function onDestroy() {
          bonusActivateItemSignal.removeListener(this.onBonusActivateItemBind);
        };
        _proto.start = function start() {
          var _this4 = this;
          this.hudModel = this.node.scene.getComponentInChildren(HudModel);
          this.bonusRollComponents = this.node.scene.getComponentsInChildren(BonusRollComponent);
          this.bonusRollComponents.forEach(function (component) {
            component.init(_this4);
          });
        };
        _proto.generateItemsLists = function generateItemsLists() {
          var itemsKeys = Object.keys(this.drawItemResultWeights);
          for (var i = 0; i < itemsKeys.length; i++) {
            var item = itemsKeys[i];
            if (this.drawItemResultWeights[item] === 0) {
              continue;
            }
            for (var j = 0; j < this.drawItemResultWeights[item]; j++) {
              this.drawItems.push(item);
            }
          }
          this.drawItems = shuffle(this.drawItems);
          var cheatItemKeys = Object.keys(this.cheatModifierResultWeights);
          for (var _i = 0; _i < cheatItemKeys.length; _i++) {
            var _item = cheatItemKeys[_i];
            if (this.cheatModifierResultWeights[_item] > 0) {
              for (var _j = 0; _j < this.cheatModifierResultWeights[_item]; _j++) {
                this.cheatCollectItems.push(_item);
              }
            }
            if (this.cheatJackpotResultWeights[_item] > 0) {
              for (var _j2 = 0; _j2 < this.cheatJackpotResultWeights[_item]; _j2++) {
                this.cheatJackpotItems.push(_item);
              }
            }
          }
          this.cheatCollectItems = shuffle(this.cheatCollectItems);
          this.cheatJackpotItems = shuffle(this.cheatJackpotItems);
          this.drawItemsRoll = createWeightedArray(this.drawItemRollWeights);
          this.drawModifiers = createWeightedArray(this.drawModifierWeights);
          this.cheatModifiers = createWeightedArray(this.cheatModifierWeights);
          this.drawJackpots = createWeightedArray(this.drawJackpotWeights);
        };
        _proto.generateValuesLists = function generateValuesLists() {
          this.drawCashValues = createWeightedArray(this.drawCashValueWeights);
          this.drawMultiplierValues = createWeightedArray(this.drawMultiplierValueWeights);
          this.drawMultiplyCount = createWeightedArray(this.drawMultiplyCountWeights);
        };
        _proto.multiplyCashItems = function multiplyCashItems(multiplier) {
          var items = this.allBonusResults.filter(function (item) {
            return itemsWithValue.includes(item.itemType) || itemsWithValue.includes(item.jackpotType) || itemsWithValue.includes(item.modifierType);
          });
          if (items.length === 0) {
            return;
          }
          var usedIndices = [];
          var randomCount = this.drawMultiplyCount[Math.floor(Math.random() * this.drawMultiplyCount.length)];
          var drawLength = Math.min(randomCount, items.length);
          for (var i = 0; i < drawLength; i++) {
            var randomIndex = 0;
            do {
              randomIndex = Math.floor(Math.random() * items.length);
            } while (usedIndices.includes(randomIndex));
            usedIndices.push(randomIndex);
            var item = items[randomIndex];
            console.log('bonus item multiplied ', i + 1, ' of ', drawLength, ' | randomIndex', randomIndex, 'item', item.itemType, item.modifierType, 'multiplier', multiplier);
            if (item.multiplyCashValue(multiplier)) {
              scaleFadeAnimation(item.node, item.node.parent);
            }
          }
        };
        _proto.getTotalCashAmount = function getTotalCashAmount(excludedItems) {
          var _this5 = this;
          if (excludedItems === void 0) {
            excludedItems = [];
          }
          var totalAmount = 0;
          var values = Object.values(this.bonusResult);
          values.forEach(function (value) {
            value.forEach(function (item) {
              if (excludedItems.find(function (excludedItem) {
                return excludedItem.itemType === item.itemType && excludedItem.modifierType === item.modifierType && excludedItem.jackpotType === item.jackpotType;
              })) {
                return;
              }
              totalAmount += _this5.totalCashPerType[item.itemType](item);
            });
          });
          return totalAmount;
        };
        _proto.onBonusActivateItemHandler = function onBonusActivateItemHandler(args) {
          this.activateItems[args.item.itemType](args);
        };
        _proto.reset = function reset() {
          var values = Object.values(this.bonusResult);
          values.forEach(function (value) {
            value.forEach(function (item) {
              item == null || item.reset();
            });
          });
          this.bonusResult = {
            left: [],
            center: [],
            right: []
          };
          this.previousResultCount = {
            left: 0,
            center: 0,
            right: 0
          };
          this.isBonusAvailable = false;
        };
        _createClass(BonusModel, [{
          key: "items",
          get: function get() {
            if (this.hudModel.isBonusCollectCheat) {
              return this.cheatCollectItems;
            } else if (this.hudModel.isBonusJackpotCheat) {
              return this.cheatJackpotItems;
            }
            return this.drawItems;
          }
        }, {
          key: "itemsRoll",
          get: function get() {
            return this.drawItemsRoll;
          }
        }, {
          key: "modifiers",
          get: function get() {
            return this.hudModel.isBonusCollectCheat ? this.cheatModifiers : this.drawModifiers;
          }
        }, {
          key: "jackpots",
          get: function get() {
            return this.drawJackpots;
          }
        }, {
          key: "cashValues",
          get: function get() {
            return this.drawCashValues;
          }
        }, {
          key: "multiplierValues",
          get: function get() {
            return this.drawMultiplierValues;
          }
        }, {
          key: "multiplyCount",
          get: function get() {
            return this.drawMultiplyCount;
          }
        }, {
          key: "allBonusRollsStopped",
          get: function get() {
            return this.bonusRollComponents.every(function (component) {
              return component.status === ReelStatus.Stopped;
            });
          }
        }, {
          key: "allBonusResults",
          get: function get() {
            var _this6 = this;
            var values = Object.values(BonusSideType);
            return values.reduce(function (acc, side) {
              return acc.concat(_this6.bonusResult[side]);
            }, []);
          }
        }]);
        return BonusModel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bonusItems", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bonusSpins", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mainMultipliers", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "startPosY", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "endPosY", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "stopPosY", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "rollSpeed", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rollTensionSpeed", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "reverse", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bonusRollComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './reelStatus.ts', './bonusTypes.ts', './bonusItemModel.ts', './eventSignals.ts', './roundTypes.ts', './gameClasses.ts', './bonusSideType.ts', './gameplayModel.ts', './playfieldModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, instantiate, Component, ReelStatus, BonusItemTypes, BonusModifierTypes, getIsRepeatableItem, respinnableModifierTypes, respinnableJackpotTypes, BonusItemModel, bonusStartRollsSignal, bonusStopRollsSignal, bonusResetRollsSignal, RoundTypes, ExcludedBonusItem, BonusSideType, GameplayModel, PlayfieldModel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      ReelStatus = module.ReelStatus;
    }, function (module) {
      BonusItemTypes = module.BonusItemTypes;
      BonusModifierTypes = module.BonusModifierTypes;
      getIsRepeatableItem = module.getIsRepeatableItem;
      respinnableModifierTypes = module.respinnableModifierTypes;
      respinnableJackpotTypes = module.respinnableJackpotTypes;
    }, function (module) {
      BonusItemModel = module.BonusItemModel;
    }, function (module) {
      bonusStartRollsSignal = module.bonusStartRollsSignal;
      bonusStopRollsSignal = module.bonusStopRollsSignal;
      bonusResetRollsSignal = module.bonusResetRollsSignal;
    }, function (module) {
      RoundTypes = module.RoundTypes;
    }, function (module) {
      ExcludedBonusItem = module.ExcludedBonusItem;
    }, function (module) {
      BonusSideType = module.BonusSideType;
    }, function (module) {
      GameplayModel = module.GameplayModel;
    }, function (module) {
      PlayfieldModel = module.PlayfieldModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "d0dfeuRJ4ZFaZPbXsp2u13T", "bonusRollComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BonusRollComponent = exports('BonusRollComponent', (_dec = ccclass('BonusRollComponent'), _dec2 = property({
        type: Enum(BonusSideType)
      }), _dec3 = property({
        type: [ExcludedBonusItem]
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BonusRollComponent, _Component);
        function BonusRollComponent() {
          var _this$itemsList, _this$createInstanceF, _this$setInstanceFrom;
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.gameplayModel = null;
          _this.playfieldModel = null;
          _this.bonusModel = null;
          _initializerDefineProperty(_this, "bonusSide", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "excludedItemTypes", _descriptor2, _assertThisInitialized(_this));
          _this.status = ReelStatus.Stopped;
          _this.itemsList = (_this$itemsList = {}, _this$itemsList[BonusItemTypes.None] = null, _this$itemsList[BonusItemTypes.Cash] = null, _this$itemsList[BonusItemTypes.Modifier] = null, _this$itemsList[BonusItemTypes.Jackpot] = null, _this$itemsList[BonusModifierTypes.StickyMultiplier] = null, _this$itemsList[BonusModifierTypes.MainMultiplier] = null, _this$itemsList[BonusModifierTypes.CoinCollector] = null, _this$itemsList[BonusModifierTypes.RepeatCollector] = null, _this$itemsList);
          _this.activeItem = undefined;
          _this.showEndResult = false;
          _this.currentSpeed = 0;
          _this.bonusStartRollBind = _this.bonusStartRollHandler.bind(_assertThisInitialized(_this));
          _this.bonusStopRollBind = _this.bonusStopRollHandler.bind(_assertThisInitialized(_this));
          _this.bonusResetBind = _this.bonusResetHandler.bind(_assertThisInitialized(_this));
          _this.createInstanceFromType = (_this$createInstanceF = {}, _this$createInstanceF[BonusItemTypes.None] = function () {
            return _this.createInstance(BonusItemTypes.None);
          }, _this$createInstanceF[BonusItemTypes.Cash] = function () {
            return _this.createInstance(BonusItemTypes.Cash);
          }, _this$createInstanceF[BonusItemTypes.Modifier] = function (modifierType) {
            return _this.createInstance(BonusItemTypes.Modifier, modifierType);
          }, _this$createInstanceF[BonusItemTypes.Jackpot] = function () {
            return _this.createInstance(BonusItemTypes.Jackpot);
          }, _this$createInstanceF);
          _this.setInstanceFromType = (_this$setInstanceFrom = {}, _this$setInstanceFrom[BonusItemTypes.None] = function () {
            var _this$itemsList2;
            return {
              redraw: false,
              instance: _this.setInstance((_this$itemsList2 = _this.itemsList) == null ? void 0 : _this$itemsList2[BonusItemTypes.None], {
                bonusItemType: BonusItemTypes.None
              })
            };
          }, _this$setInstanceFrom[BonusItemTypes.Cash] = function (exclude) {
            var _this$itemsList3;
            if (exclude.some(function (item) {
              return item.itemType === BonusItemTypes.Cash;
            })) {
              // console.warn("Drawn item cash is excluded");
              return {
                redraw: true
              };
            }
            var randomCashIndex = Math.floor(Math.random() * _this.bonusModel.cashValues.length);
            var cashValue = _this.bonusModel.cashValues[randomCashIndex];
            // const cashValue = this.bonusModel.cashValues[randomCashIndex] * this.hudModel.stake;
            return {
              redraw: false,
              instance: _this.setInstance((_this$itemsList3 = _this.itemsList) == null ? void 0 : _this$itemsList3[BonusItemTypes.Cash], {
                bonusItemType: BonusItemTypes.Cash,
                cashValue: cashValue
              })
            };
          }, _this$setInstanceFrom[BonusItemTypes.Modifier] = function (exclude) {
            var _this$itemsList4;
            if (exclude.some(function (item) {
              return item.itemType === BonusItemTypes.Modifier;
            })) {
              return {
                redraw: true
              };
            }
            var multiplierValue = undefined;
            var randomModType = _this.drawModifier(exclude == null ? void 0 : exclude.map(function (e) {
              return e.modifierType;
            }));
            if (!randomModType) {
              // console.warn("Drawn modifier is undefined - Possibly excluded");
              return {
                redraw: true
              };
            }
            if (randomModType === BonusModifierTypes.StickyMultiplier) {
              var randomMultiplierIndex = Math.floor(Math.random() * _this.bonusModel.multiplierValues.length);
              multiplierValue = _this.bonusModel.multiplierValues[randomMultiplierIndex];
            }
            return {
              redraw: false,
              instance: _this.setInstance((_this$itemsList4 = _this.itemsList) == null ? void 0 : _this$itemsList4[randomModType], {
                bonusItemType: BonusItemTypes.Modifier,
                modifierType: randomModType,
                multiplierValue: multiplierValue
              })
            };
          }, _this$setInstanceFrom[BonusItemTypes.Jackpot] = function (exclude) {
            var _this$itemsList5;
            var randomJackpot = _this.drawJackpot(exclude == null ? void 0 : exclude.map(function (e) {
              return e.jackpotType;
            }));
            if (!randomJackpot) {
              // console.warn("Drawn jackpot is undefined - Possibly excluded");
              return {
                redraw: true
              };
            }
            var jackpotValue = _this.gameplayModel.getJackpotValueByType(randomJackpot);
            return {
              redraw: false,
              instance: _this.setInstance((_this$itemsList5 = _this.itemsList) == null ? void 0 : _this$itemsList5[BonusItemTypes.Jackpot], {
                bonusItemType: BonusItemTypes.Jackpot,
                jackpotType: randomJackpot,
                cashValue: jackpotValue
              })
            };
          }, _this$setInstanceFrom);
          return _this;
        }
        var _proto = BonusRollComponent.prototype;
        _proto.getHasTension = function getHasTension(item) {
          // if (item.itemType === BonusItemTypes.Jackpot) {
          //     if (
          //         item.jackpotType === JackpotTypes.Godlike || 
          //         item.jackpotType === JackpotTypes.Ares || 
          //         item.jackpotType === JackpotTypes.Athena
          //     ) {
          //         return true;
          //     }
          //     return false;
          // } else if (item.itemType === BonusItemTypes.Modifier) {
          //     if (
          //         item.modifierType === BonusModifierTypes.RepeatCollector || 
          //         (item.modifierType === BonusModifierTypes.StickyMultiplier && item.getLabelValue(true) > 9)
          //     ) {
          //         return true;
          //     }
          //     return false;
          // }
          if (item.mysteryNode) {
            return true;
          }
          return false;
        };
        _proto.onLoad = function onLoad() {
          bonusStartRollsSignal.addListener(this.bonusStartRollBind);
          bonusStopRollsSignal.addListener(this.bonusStopRollBind);
          bonusResetRollsSignal.addListener(this.bonusResetBind);
        };
        _proto.onDestroy = function onDestroy() {
          bonusStartRollsSignal.removeListener(this.bonusStartRollBind);
          bonusStopRollsSignal.removeListener(this.bonusStopRollBind);
          bonusResetRollsSignal.removeListener(this.bonusResetBind);
        };
        _proto.start = function start() {
          this.gameplayModel = this.node.scene.getComponentInChildren(GameplayModel);
          this.playfieldModel = this.node.scene.getComponentInChildren(PlayfieldModel);
          this.createItems();
        };
        _proto.init = function init(bonusModel) {
          this.bonusModel = bonusModel;
        };
        _proto.createItems = function createItems() {
          var _this2 = this;
          var typeList = Object.values(BonusItemTypes).map(function (item) {
            return item;
          });
          var modifierList = Object.values(BonusModifierTypes).map(function (item) {
            return item;
          });
          typeList.forEach(function (type) {
            if (type === BonusItemTypes.Modifier) {
              modifierList.forEach(function (modifier) {
                _this2.itemsList[modifier] = _this2.createInstanceFromType[BonusItemTypes.Modifier](modifier);
              });
            } else {
              _this2.itemsList[type] = _this2.createInstanceFromType[type]();
            }
          });
        };
        _proto.bonusStartRollHandler = function bonusStartRollHandler(args) {
          var _this$gameplayModel;
          if (args.sideType !== this.bonusSide) {
            return;
          }
          if (((_this$gameplayModel = this.gameplayModel) == null ? void 0 : _this$gameplayModel.roundType) !== RoundTypes.Bonus || this.activeItem && !this.activeItem.canRedrawItem) {
            return;
          }
          this.reset();
          this.status = ReelStatus.Rolling;
          this.activeItem = this.drawItem(this.excludedItemTypes /*BonusItemTypes.None*/);
        };

        _proto.bonusStopRollHandler = function bonusStopRollHandler(args) {
          var _this$gameplayModel2;
          if (args.sideType !== this.bonusSide) {
            return;
          }
          if (((_this$gameplayModel2 = this.gameplayModel) == null ? void 0 : _this$gameplayModel2.roundType) !== RoundTypes.Bonus) {
            return;
          }
          if (this.showEndResult && this.activeItem && getIsRepeatableItem(this.activeItem.itemType, this.activeItem.modifierType)) {
            this.activeItem.activate(this.gameplayModel.roundType);
          }
          this.showEndResult = true;
        };
        _proto.bonusResetHandler = function bonusResetHandler() {
          this.reset();
        };
        _proto.reset = function reset() {
          this.status = ReelStatus.Stopped;
          this.showEndResult = false;
          this.resetItem();
          this.activeItem = undefined;
        }

        /*public drawItem(exclude: ExcludedBonusItem[] = []): BonusItemModel {
            const list = this.showEndResult ? this.bonusModel.items : this.bonusModel.itemsRoll;
            const includedList = list.filter((item) => exclude.filter((e) => {
                    // Jackpots are excluded, because every column has some type of jackpot
                if (e.itemType === item && item !== BonusItemTypes.Jackpot) {
                    // Modifiers are excluded everywhere but the middel
                    return true;
                }
                return false;
            }).length === 0);
             const randomItemIndex = Math.floor(Math.random() * includedList.length);
            
            const randomItem = includedList[randomItemIndex];
            const instance = this.setInstanceFromType[randomItem](exclude);
            this.setSpeed(instance);
            return instance;
        }*/;
        _proto.drawItem = function drawItem(exclude) {
          if (exclude === void 0) {
            exclude = [];
          }
          var list = this.showEndResult ? this.bonusModel.items : this.bonusModel.itemsRoll;
          var randomItemIndex = 0;
          var data = {
            redraw: true
          };
          do {
            randomItemIndex = Math.floor(Math.random() * list.length);
            var randomItem = list[randomItemIndex];
            data = this.setInstanceFromType[randomItem](exclude);
          } while (data.redraw);
          this.setSpeed(data.instance);
          return data.instance;
        };
        _proto.setSpeed = function setSpeed(instance) {
          this.currentSpeed = this.getHasTension(instance) ? this.bonusModel.rollTensionSpeed : this.bonusModel.rollSpeed;
        };
        _proto.drawModifier = function drawModifier(excludedModifiers) {
          // const includedList = this.bonusModel.modifiers.filter((item) => excludedModifiers.filter((e) => e === item).length === 0);
          var includedList = this.bonusModel.modifiers;
          var randomIndex = Math.floor(Math.random() * includedList.length);
          return excludedModifiers.includes(includedList[randomIndex]) ? undefined : includedList[randomIndex];
        };
        _proto.drawJackpot = function drawJackpot(excludeJackpots) {
          // const includedList = this.bonusModel.jackpots.filter((item) => excludeJackpots.filter((e) => e === item).length === 0);
          var includedList = this.bonusModel.jackpots;
          var randomIndex = Math.floor(Math.random() * includedList.length);
          return excludeJackpots.includes(includedList[randomIndex]) ? undefined : includedList[randomIndex];
        };
        _proto.createInstance = function createInstance(itemType, modifierType) {
          var item = this.bonusModel.bonusItems.find(function (item) {
            return item.itemType === itemType && item.modifierType === modifierType;
          });
          var instance = instantiate(item.prefab);
          instance.setParent(this.node);
          instance.y = this.bonusModel.reverse ? this.bonusModel.endPosY : this.bonusModel.startPosY;
          instance.active = false;
          return instance;
        };
        _proto.setInstance = function setInstance(instance, data) {
          if (!instance) {
            console.warn('Instance is undefined', data);
            return;
          }
          instance.active = true;
          instance.y = this.bonusModel.reverse ? this.bonusModel.endPosY : this.bonusModel.startPosY;
          var model = instance.getComponent(BonusItemModel);
          model.init(this.bonusSide, {
            modifierType: data.modifierType,
            cashValue: data.cashValue,
            jackpotType: data.jackpotType,
            multiplierValue: data.multiplierValue
          });
          return model;
        };
        _proto.resetItem = function resetItem() {
          if (this.activeItem) {
            this.activeItem.reset();
            this.activeItem.node.y = this.bonusModel.reverse ? this.bonusModel.endPosY : this.bonusModel.startPosY;
            this.activeItem.node.active = false;
          }
        };
        _proto.update = function update(deltaT) {
          var _this$activeItem;
          var item = (_this$activeItem = this.activeItem) == null ? void 0 : _this$activeItem.node;
          if (!item || this.status !== ReelStatus.Rolling && this.status !== ReelStatus.Stopping) {
            return;
          }
          var ySpeed = this.currentSpeed * deltaT;
          item.y += this.bonusModel.reverse ? ySpeed : -ySpeed;
          var resetItem = this.bonusModel.reverse ? item.y >= this.bonusModel.startPosY : item.y <= this.bonusModel.endPosY;
          var stopPos = this.bonusModel.reverse ? item.y >= this.bonusModel.stopPosY : item.y <= this.bonusModel.stopPosY;
          if (this.showEndResult && this.status === ReelStatus.Stopping && stopPos) {
            this.addResult();
            item.y = this.bonusModel.stopPosY;
            this.status = ReelStatus.Stopped;
            return;
          } else if (resetItem) {
            item.y = this.bonusModel.reverse ? this.bonusModel.endPosY : this.bonusModel.startPosY;
            this.resetItem();
            this.activeItem = this.drawItem(this.showEndResult ? this.excludedItemTypes : [].concat(this.excludedItemTypes));
            this.status = this.showEndResult ? ReelStatus.Stopping : ReelStatus.Rolling;
            return;
          }
        };
        _proto.addResult = function addResult() {
          if (!this.activeItem || this.activeItem.itemType === BonusItemTypes.None) {
            return;
          }
          var isRespinnable = respinnableModifierTypes.includes(this.activeItem.modifierType) || respinnableJackpotTypes.includes(this.activeItem.jackpotType);
          if (isRespinnable) {
            this.activeItem.activate(this.gameplayModel.roundType, this.playfieldModel);
            return;
          }
          this.bonusModel.bonusResult[this.bonusSide].push(this.activeItem);
          this.activeItem.activate(this.gameplayModel.roundType);
        };
        return BonusRollComponent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bonusSide", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BonusSideType.Center;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "excludedItemTypes", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bonusSideType.ts", ['cc', './godFeatureTypes.ts'], function (exports) {
  var cclegacy, GodFeatureTypes;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GodFeatureTypes = module.GodFeatureTypes;
    }],
    execute: function () {
      var _bonusSideTypeToGodFe;
      cclegacy._RF.push({}, "a9afbRTNzhHKpALNmwKHx3R", "bonusSideType", undefined);
      var BonusSideType = exports('BonusSideType', /*#__PURE__*/function (BonusSideType) {
        BonusSideType["Left"] = "left";
        BonusSideType["Center"] = "center";
        BonusSideType["Right"] = "right";
        return BonusSideType;
      }({}));
      var bonusSideTypeToGodFeatureType = exports('bonusSideTypeToGodFeatureType', (_bonusSideTypeToGodFe = {}, _bonusSideTypeToGodFe[BonusSideType.Left] = GodFeatureTypes.Ares, _bonusSideTypeToGodFe[BonusSideType.Center] = undefined, _bonusSideTypeToGodFe[BonusSideType.Right] = GodFeatureTypes.Athena, _bonusSideTypeToGodFe));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bonusTypes.ts", ['cc', './jackpotTypes.ts'], function (exports) {
  var cclegacy, JackpotTypes;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      JackpotTypes = module.JackpotTypes;
    }],
    execute: function () {
      exports('getIsRepeatableItem', getIsRepeatableItem);
      cclegacy._RF.push({}, "ea6b19tYbpF+J9PO7abyWyY", "bonusTypes", undefined);
      var BonusItemTypes = exports('BonusItemTypes', /*#__PURE__*/function (BonusItemTypes) {
        BonusItemTypes["None"] = "none";
        BonusItemTypes["Cash"] = "cash";
        BonusItemTypes["Modifier"] = "modifier";
        BonusItemTypes["Jackpot"] = "jackpot";
        return BonusItemTypes;
      }({}));
      var BonusModifierTypes = exports('BonusModifierTypes', /*#__PURE__*/function (BonusModifierTypes) {
        BonusModifierTypes["StickyMultiplier"] = "stickyMultiplier";
        BonusModifierTypes["MainMultiplier"] = "mainMultiplier";
        BonusModifierTypes["CoinCollector"] = "coinCollector";
        BonusModifierTypes["RepeatCollector"] = "repeatCollector";
        return BonusModifierTypes;
      }({}));
      var itemsWithValue = exports('itemsWithValue', [BonusItemTypes.Cash, JackpotTypes.Unreal, JackpotTypes.Divine, JackpotTypes.Heroic, JackpotTypes.Warlord, JackpotTypes.Mythic, JackpotTypes.Legendary, BonusModifierTypes.CoinCollector]);
      var repeatableModifierTypes = exports('repeatableModifierTypes', [BonusModifierTypes.StickyMultiplier, BonusModifierTypes.RepeatCollector]);
      var respinnableModifierTypes = exports('respinnableModifierTypes', [BonusModifierTypes.MainMultiplier]);
      var respinnableJackpotTypes = exports('respinnableJackpotTypes', [JackpotTypes.Ares, JackpotTypes.Athena, JackpotTypes.Godlike]);
      function getIsRepeatableItem(itemType, modifierType) {
        if (itemType === BonusItemTypes.Modifier) {
          return repeatableModifierTypes.includes(modifierType);
        }
        return false;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/coinComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './coinData.ts', './jackpotTypes.ts', './curveTween.ts', './eventSignals.ts', './godFeatureTypes.ts', './roundTypes.ts', './gameData.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, Label, Vec2, tween, Vec3, Component, CoinTypes, JackpotTypes, JackpotTriggerTypes, jackpotTypeToTriggerType, moveInCurve, moveCoinSignal, moveCoinCompleteSignal, godFeatureSignal, GodFeatureTypes, RoundTypes, gameData;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Label = module.Label;
      Vec2 = module.Vec2;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      CoinTypes = module.CoinTypes;
    }, function (module) {
      JackpotTypes = module.JackpotTypes;
      JackpotTriggerTypes = module.JackpotTriggerTypes;
      jackpotTypeToTriggerType = module.jackpotTypeToTriggerType;
    }, function (module) {
      moveInCurve = module.moveInCurve;
    }, function (module) {
      moveCoinSignal = module.moveCoinSignal;
      moveCoinCompleteSignal = module.moveCoinCompleteSignal;
      godFeatureSignal = module.godFeatureSignal;
    }, function (module) {
      GodFeatureTypes = module.GodFeatureTypes;
    }, function (module) {
      RoundTypes = module.RoundTypes;
    }, function (module) {
      gameData = module.gameData;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "505c1C3h3NB/ZASWd+MFuVk", "coinComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CoinComponent = exports('CoinComponent', (_dec = ccclass('CoinComponent'), _dec2 = property({
        type: Enum(CoinTypes)
      }), _dec3 = property({
        type: Enum(JackpotTypes),
        visible: function visible() {
          return this.coinType === CoinTypes.Jackpot;
        }
      }), _dec4 = property({
        type: Enum(GodFeatureTypes),
        visible: function visible() {
          return this.coinType === CoinTypes.God;
        }
      }), _dec5 = property({
        type: Label,
        visible: function visible() {
          return this.coinType === CoinTypes.Jackpot && this.jackpotTriggerType === JackpotTriggerTypes.CashGrab;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CoinComponent, _Component);
        function CoinComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "coinType", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jackpotType", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "featureType", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "valueLabel", _descriptor4, _assertThisInitialized(_this));
          _this.coinTargetPosition = new Vec2(0, 0);
          _this.coinTargetScale = new Vec2(1, 1);
          _this.coinDuration = 0.5;
          _this.coinCurveWidth = 200;
          _this.coinCurveHeight = 100;
          _this.isMoving = false;
          _this.isCoinCompleted = false;
          _this.isDestroyed = false;
          _this.moveCoinHandlerBind = _this.moveCoinHandler.bind(_assertThisInitialized(_this));
          _this.moveCoinCompleteHandlerBind = _this.moveCoinCompleteHandler.bind(_assertThisInitialized(_this));
          return _this;
        }
        var _proto = CoinComponent.prototype;
        _proto.onLoad = function onLoad() {
          moveCoinSignal.addListener(this.moveCoinHandlerBind);
          moveCoinCompleteSignal.addListener(this.moveCoinCompleteHandlerBind);
        };
        _proto.onDestroy = function onDestroy() {
          moveCoinSignal.removeListener(this.moveCoinHandlerBind);
          moveCoinCompleteSignal.removeListener(this.moveCoinCompleteHandlerBind);
        };
        _proto.moveCoinHandler = function moveCoinHandler(args) {
          if (args.coinData.coinType !== this.coinType && !this.isMoving) {
            return;
          }
          if (this.coinType === CoinTypes.God && args.coinData.valueType !== this.featureType) {
            return;
          }
          if (this.coinType === CoinTypes.Jackpot && args.coinData.valueType !== this.jackpotType) {
            return;
          }
          if (this.coinType === CoinTypes.Jackpot && args.roundType === RoundTypes.FreeSpin && this.jackpotTriggerType === JackpotTriggerTypes.CashGrab) {
            this.scaleCoin({
              target: args.target,
              roundType: args.roundType
            });
          } else {
            this.moveCoinToPosition({
              target: args.target,
              roundType: args.roundType
            });
          }
        };
        _proto.moveCoinCompleteHandler = function moveCoinCompleteHandler(args) {
          if (args.coinData.coinType === CoinTypes.God && args.coinData.id === this.node.uuid && !this.isCoinCompleted) {
            if (args.roundType === RoundTypes.Normal) {
              godFeatureSignal.dispatch({
                feature: args.coinData.valueType,
                addAmount: gameData.freeSpins.fillAmount
              });
            }
            this.isCoinCompleted = true;
          }
        };
        _proto.moveCoinToPosition = function moveCoinToPosition(data) {
          var _this2 = this;
          this.isMoving = true;
          this.node.setParent(data.target.parent, true);
          this.coinTargetPosition = new Vec2(data.target.position.x, data.target.position.y);
          this.coinTargetScale = new Vec2(data.target.scale.x * 0.5, data.target.scale.y * 0.5);
          moveInCurve(this.node, this.coinTargetPosition, this.coinTargetScale, this.coinDuration, 'cubicIn', this.coinCurveWidth, this.coinCurveHeight, function () {
            moveCoinCompleteSignal.dispatch({
              roundType: data.roundType,
              coinComponent: _this2,
              coinData: {
                coinType: _this2.coinType,
                valueType: _this2.coinType === CoinTypes.God ? _this2.featureType : _this2.jackpotType,
                id: _this2.node.uuid
              }
            });
            _this2.destroyCoin();
            _this2.isCoinCompleted = true;
            _this2.isMoving = false;
          });
        };
        _proto.scaleCoin = function scaleCoin(data) {
          var _this3 = this;
          tween(this.node).to(0.1, {
            scale: new Vec3(1.25, 1.25, 1)
          }, {
            easing: 'quadOut'
          }).to(0.15, {
            scale: new Vec3(0, 0, 0)
          }, {
            easing: 'quadIn'
          }).call(function () {
            moveCoinCompleteSignal.dispatch({
              roundType: data.roundType,
              coinComponent: _this3,
              coinData: {
                coinType: _this3.coinType,
                valueType: _this3.coinType === CoinTypes.God ? _this3.featureType : _this3.jackpotType,
                id: _this3.node.uuid
              }
            });
            _this3.destroyCoin();
            _this3.isCoinCompleted = true;
          }).start();
        };
        _proto.destroyCoin = function destroyCoin() {
          if (!this.isDestroyed) {
            this.isDestroyed = true;
            this.node.destroy();
            this.destroy();
          }
        };
        _createClass(CoinComponent, [{
          key: "jackpotTriggerType",
          get: function get() {
            return jackpotTypeToTriggerType[this.jackpotType];
          }
        }, {
          key: "jackpotValue",
          get: function get() {
            var _this$valueLabel$stri, _this$valueLabel;
            var rawString = (_this$valueLabel$stri = (_this$valueLabel = this.valueLabel) == null ? void 0 : _this$valueLabel.string) != null ? _this$valueLabel$stri : '';
            var cleanedString = rawString.replace('€', '').replace(/,/g, '');
            var numericValue = parseFloat(cleanedString);
            return isNaN(numericValue) ? 0 : numericValue * 100;
          },
          set: function set(value) {
            if (!this.valueLabel) {
              // console.warn('Value label is undefined');
              return;
            }
            this.valueLabel.string = '€' + value.toFixed(2);
          }
        }]);
        return CoinComponent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coinType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return CoinTypes.God;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "jackpotType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return undefined;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "featureType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return undefined;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "valueLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return undefined;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/coinData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "54c99b5fodFlqIy0xvwsM0D", "coinData", undefined);
      var CoinTypes = exports('CoinTypes', /*#__PURE__*/function (CoinTypes) {
        CoinTypes["God"] = "god";
        CoinTypes["Jackpot"] = "jackpot";
        return CoinTypes;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/commonAnimations.ts", ['cc'], function (exports) {
  var cclegacy, instantiate, Vec3, tween, Sprite, Color;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      tween = module.tween;
      Sprite = module.Sprite;
      Color = module.Color;
    }],
    execute: function () {
      exports('scaleFadeAnimation', scaleFadeAnimation);
      cclegacy._RF.push({}, "31b3aS484xDpZZEDuwuRFbA", "commonAnimations", undefined);
      function scaleFadeAnimation(object, parent, easing, onComplete) {
        if (easing === void 0) {
          easing = 'linear';
        }
        var instanceObject = instantiate(object);
        instanceObject.parent = parent;
        var scaleTarget = {
          scale: new Vec3(instanceObject.scale.x * 3, instanceObject.scale.y * 3, instanceObject.scale.z)
        };
        tween(instanceObject).to(0.3, scaleTarget, {
          onComplete: function onComplete() {
            instanceObject.destroy();
          }
        }).start();
        var spriteComponent = instanceObject.getComponent(Sprite);
        if (spriteComponent) {
          var startColor = spriteComponent.color;
          var alphaTarget = {
            alpha: spriteComponent.color.a
          };
          tween(alphaTarget).to(0.25, {
            alpha: 0
          }, {
            easing: easing,
            onUpdate: function onUpdate() {
              spriteComponent.color = new Color(startColor.r, startColor.g, startColor.b, alphaTarget.alpha);
            }
          }).start();
        }
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/curveTween.ts", ['cc'], function (exports) {
  var cclegacy, Vec2, tween;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec2 = module.Vec2;
      tween = module.tween;
    }],
    execute: function () {
      exports({
        getQuadraticBezierPoint: getQuadraticBezierPoint,
        moveInCurve: moveInCurve,
        moveInCurveWithCubicOutIn: moveInCurveWithCubicOutIn
      });
      cclegacy._RF.push({}, "235005okqFGz63fYfQpGut+", "curveTween", undefined);

      /**
       * Calculates a point on a quadratic Bézier curve.
       * @param p0 The starting point.
       * @param p1 The control point (determines the curve).
       * @param p2 The ending point.
       * @param t The progress along the curve, from 0 to 1.
       * @returns The position (Vec2) on the curve at progress t.
       */
      function getQuadraticBezierPoint(p0, p1, p2, t) {
        var u = 1 - t;
        var tt = t * t;
        var uu = u * u;
        var p = new Vec2(uu * p0.x + 2 * u * t * p1.x + tt * p2.x, uu * p0.y + 2 * u * t * p1.y + tt * p2.y);
        return p;
      }

      /**
       * Moves a node along a curved path with easing.
       * @param node The node to be animated.
       * @param endPos The ending position.
       * @param endScale The ending scale.
       * @param duration The duration of the movement in seconds.
       * @param curveWidth The width of the curve's arc. A positive value curves to the right, negative to the left.
       * @param curveHeight The height of the curve's arc. A positive value creates an upward arc.
       * @param onComplete An optional callback function to execute when the tween is complete.
       */
      function moveInCurve(node, endPos, endScale, duration, easing, curveWidth, curveHeight, onComplete) {
        var _node$position$x, _node$position$y, _node$scale$x, _node$scale$y;
        if (!node) {
          console.warn('Node is undefined');
          return;
        }

        // Define the control point for the Bezier curve
        // Midpoint x/y, and offset by width/height to create the arc
        var startPos = new Vec2((_node$position$x = node.position.x) != null ? _node$position$x : 0, (_node$position$y = node.position.y) != null ? _node$position$y : 0);
        var startScale = new Vec2((_node$scale$x = node.scale.x) != null ? _node$scale$x : 1, (_node$scale$y = node.scale.y) != null ? _node$scale$y : 1);
        var controlPoint = new Vec2((startPos.x + endPos.x) / 2 + curveWidth, (startPos.y + endPos.y) / 2 + curveHeight);

        // Use a temporary object to tween a 'progress' value from 0 to 1
        var tweenTarget = {
          progress: 0
        };
        tween(tweenTarget).to(duration, {
          progress: 1
        }, {
          easing: easing,
          // Starts slow, accelerates towards the end
          onUpdate: function onUpdate() {
            var _node$position, _node$position2;
            // Calculate the position on the Bezier curve using the tweened progress
            var currentPos = getQuadraticBezierPoint(startPos, controlPoint, endPos, tweenTarget.progress);
            if (!currentPos || currentPos.x === undefined || currentPos.y === undefined || Number.isNaN(currentPos.x) || Number.isNaN(currentPos.y)) {
              console.warn('Current position is undefined or invalid', currentPos);
              return;
            }
            if (!node || node.x === undefined || node.y === undefined || ((_node$position = node.position) == null ? void 0 : _node$position.x) === undefined || ((_node$position2 = node.position) == null ? void 0 : _node$position2.y) === undefined || Number.isNaN(node.position.x) || Number.isNaN(node.position.y)) {
              console.warn('Node position is undefined or invalid', node);
              return;
            }
            // Update the node's position
            node == null || node.setPosition(currentPos.x, currentPos.y, 0);

            // Update the node's scale
            node == null || node.setScale(startScale.x + (endScale.x - startScale.x) * tweenTarget.progress, startScale.y + (endScale.y - startScale.y) * tweenTarget.progress);
          },
          onComplete: onComplete
        }).start();
      }

      /**
       * Moves a node along a curved path simulating cubicOutIn easing.
       * This creates a fast-slow-fast movement profile.
       */
      function moveInCurveWithCubicOutIn(node, endPos, endScale, duration, curveWidth, curveHeight, onComplete) {
        var startPos = new Vec2(node.position.x, node.position.y);
        var startScale = new Vec2(node.scale.x, node.scale.y);
        var controlPoint = new Vec2((startPos.x + endPos.x) / 2 + curveWidth, (startPos.y + endPos.y) / 2 + curveHeight);
        var tweenTarget = {
          progress: 0
        };
        var onUpdateCallback = function onUpdateCallback() {
          var currentPos = getQuadraticBezierPoint(startPos, controlPoint, endPos, tweenTarget.progress);
          node.setPosition(currentPos.x, currentPos.y, 0);
          node.setScale(startScale.x + (endScale.x - startScale.x) * tweenTarget.progress, startScale.y + (endScale.y - startScale.y) * tweenTarget.progress);
        };
        tween(tweenTarget)
        // Part 1: Animate from 0 to 0.5 with 'cubicOut' (fast start)
        .to(duration / 2, {
          progress: 0.5
        }, {
          easing: 'cubicOut',
          onUpdate: onUpdateCallback
        })
        // Part 2: Animate from 0.5 to 1 with 'cubicIn' (fast end)
        .to(duration / 2, {
          progress: 1
        }, {
          easing: 'cubicIn',
          onUpdate: onUpdateCallback
        }).call(function () {
          onComplete == null || onComplete();
        }).start();
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dropDownMenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './signal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Button, Node, Label, Prefab, CCInteger, Component, instantiate, UITransform, Signal;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      Label = module.Label;
      Prefab = module.Prefab;
      CCInteger = module.CCInteger;
      Component = module.Component;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
    }, function (module) {
      Signal = module.Signal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "5dc06+LZEtKgoUbDtHQjJOM", "dropDownMenu", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DropDownMenu = exports('default', (_dec = ccclass('DropDownMenu'), _dec2 = property(Button), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Prefab), _dec6 = property(CCInteger), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DropDownMenu, _Component);
        function DropDownMenu() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mainButton", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "menuContainer", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainButtonLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "optionButtonPrefab", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startIndex", _descriptor5, _assertThisInitialized(_this));
          _this._isOpen = false;
          _this.optionButtons = [];
          _this.onOptionSelectedSignal = new Signal('onOptionSelectedSignal');
          return _this;
        }
        var _proto = DropDownMenu.prototype;
        _proto.onLoad = function onLoad() {
          this.menuContainer.active = this._isOpen;
          this.mainButton.node.on('click', this.toggleMenu, this);
        }

        /**
         * Populates the dropdown menu with buttons based on the provided options.
         * If the options array is empty, a single default button is created.
         * @param options An array of strings for the button labels.
         * @param defaultOption The label for the default option if the options array is empty. Defaults to "Default".
         */;
        _proto.populateMenu = function populateMenu(options, startValue, defaultOption) {
          var _this2 = this;
          if (defaultOption === void 0) {
            defaultOption = "Default";
          }
          this.clearMenu();
          var optionsToCreate = options.length > 0 ? options : [defaultOption];
          var _loop = function _loop() {
              var optionText = optionsToCreate[i];
              if (!_this2.optionButtonPrefab) {
                console.error("Option Button Prefab is not assigned in DropdownMenu.");
                return {
                  v: void 0
                };
              }
              var newButtonNode = instantiate(_this2.optionButtonPrefab);
              var uiTransform = newButtonNode.getComponent(UITransform);
              newButtonNode.setPosition(0, i * uiTransform.contentSize.height, 0);
              _this2.menuContainer.addChild(newButtonNode);
              var button = newButtonNode.getComponent(Button);
              var label = newButtonNode.getComponentInChildren(Label);
              if (label) {
                label.string = optionText;
              }
              if (button) {
                _this2.optionButtons.push(button);
                button.node.on('click', function () {
                  _this2.onOptionSelected(optionText);
                }, _this2);
              }
            },
            _ret;
          for (var i = 0; i < optionsToCreate.length; i++) {
            _ret = _loop();
            if (_ret) return _ret.v;
          }

          // Set main button to the first option by default
          if (optionsToCreate.length > 0 && this.mainButtonLabel) {
            var findIndex = optionsToCreate.findIndex(function (option) {
              return option === startValue;
            });
            this.startIndex = findIndex > -1 ? findIndex : this.startIndex;
            var index = this.startIndex > optionsToCreate.length - 1 ? 0 : optionsToCreate.length > this.startIndex ? this.startIndex : 0;
            this.mainButtonLabel.string = optionsToCreate[index];
            this.onOptionSelectedSignal.dispatch(optionsToCreate[index]);
          }
        };
        _proto.clearMenu = function clearMenu() {
          this.menuContainer.removeAllChildren();
          for (var _iterator = _createForOfIteratorHelperLoose(this.optionButtons), _step; !(_step = _iterator()).done;) {
            var button = _step.value;
            button.node.targetOff(this);
          }
          this.optionButtons = [];
        };
        _proto.toggleMenu = function toggleMenu() {
          this._isOpen = !this._isOpen;
          this.menuContainer.active = this._isOpen;
        };
        _proto.onOptionSelected = function onOptionSelected(selectedText) {
          if (this.mainButtonLabel) {
            this.mainButtonLabel.string = selectedText;
          }
          this.onOptionSelectedSignal.dispatch(selectedText);
          this.toggleMenu(); // Close menu after selection
        };

        _proto.onDestroy = function onDestroy() {
          var _this$mainButton;
          (_this$mainButton = this.mainButton) == null || (_this$mainButton = _this$mainButton.node) == null || _this$mainButton.off('click', this.toggleMenu, this);
        };
        return DropDownMenu;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "menuContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mainButtonLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "optionButtonPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "startIndex", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DropdownMenuCreator.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // /// <reference path="../../temp/declarations/editor.d.ts" />
      cclegacy._RF.push({}, "577e88ZoNJBhqHp/LlIx+ZV", "DropdownMenuCreator", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/eventSignals.ts", ['cc', './signal.ts'], function (exports) {
  var cclegacy, Signal;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Signal = module.Signal;
    }],
    execute: function () {
      cclegacy._RF.push({}, "03e4aRIlBRPhLvrrNQ38GQf", "eventSignals", undefined);
      var playfieldLoadedSignal = exports('playfieldLoadedSignal', new Signal('PlayfieldLoadedSignal'));
      var startRoundSignal = exports('startRoundSignal', new Signal('StartRoundSignal'));
      var spinReelSignal = exports('spinReelSignal', new Signal('SpinReelSignal'));
      var stopReelSignal = exports('stopReelSignal', new Signal('StopReelSignal'));
      var showReelResultSignal = exports('showReelResultSignal', new Signal('ShowReelResultSignal'));
      var setReelSignal = exports('setReelSignal', new Signal('SetReelSignal'));
      var setReelsSignal = exports('setReelsSignal', new Signal('SetReelsSignal'));
      var setReelsUpdateSignal = exports('setReelsUpdateSignal', new Signal('SetReelsUpdateSignal'));
      var addToBalanceSignal = exports('addToBalanceSignal', new Signal('AddToBalanceSignal'));
      var setBalanceSignal = exports('setBalanceSignal', new Signal('SetBalanceSignal'));
      var addToWonSignal = exports('addToWonSignal', new Signal('AddToWonSignal'));
      var setWonSignal = exports('setWonSignal', new Signal('SetWonSignal'));
      var stakeChangedSignal = exports('stakeChangedSignal', new Signal('StakeChangedSignal'));
      var createWinningsSignal = exports('createWinningsSignal', new Signal('CreateWinningsSignal'));
      var changeReelSpinDirectionSignal = exports('changeReelSpinDirectionSignal', new Signal('ChangeReelSpinDirectionSignal'));
      var popSymbolsSignal = exports('popSymbolsSignal', new Signal('PopSymbolsSignal'));
      var tumbleSymbolsSignal = exports('tumbleSymbolsSignal', new Signal('TumbleSymbolsSignal'));
      var increaseTumbleCountSignal = exports('increaseTumbleCountSignal', new Signal('IncreaseTumbleCountSignal'));
      var godFeatureSignal = exports('godFeatureSignal', new Signal('GodFeatureSignal'));
      var godFeatureResetSignal = exports('godFeatureResetSignal', new Signal('GodFeatureResetSignal'));
      var animateGodSymbolSignal = exports('animateGodSymbolSignal', new Signal('AnimateGodSymbolSignal'));
      var moveCoinSignal = exports('moveCoinSignal', new Signal('MoveCoinSignal'));
      var moveCoinCompleteSignal = exports('moveCoinCompleteSignal', new Signal('MoveCoinCompleteSignal'));
      var setRoundTypeSignal = exports('setRoundTypeSignal', new Signal('SetRoundTypeSignal'));
      var bonusStartRollsSignal = exports('bonusStartRollsSignal', new Signal('BonusStartRollsSignal'));
      var bonusStopRollsSignal = exports('bonusStopRollsSignal', new Signal('BonusStopRollsSignal'));
      var bonusResetRollsSignal = exports('bonusResetRollsSignal', new Signal('BonusResetRollsSignal'));
      var bonusActivateItemSignal = exports('bonusActivateItemSignal', new Signal('BonusActivateItemSignal'));
      var freeSpinsActivateSignal = exports('freeSpinsActivateSignal', new Signal('FreeSpinsActivateSignal'));
      var freeSpinsActivateAnimationSignal = exports('freeSpinsActivateAnimationSignal', new Signal('FreeSpinsActivateAnimationSignal'));
      var freeSpinsMultiplyWinlinesSignal = exports('freeSpinsMultiplyWinlinesSignal', new Signal('FreeSpinsMultiplyWinlinesSignal'));
      var freeSpinsToggleJackpotSignal = exports('freeSpinsToggleJackpotSignal', new Signal('FreeSpinsToggleJackpotSignal'));
      var respinTriggerSignal = exports('respinTriggerSignal', new Signal('RespinTriggerSignal'));
      var respinGodsSignal = exports('respinGodsSignal', new Signal('RespinGodsSignal'));
      var bonusBuyTestSignal = exports('bonusBuyTestSignal', new Signal('BonusBuyTestSignal'));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/featureStatus.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "201e7u13VdF4rvk/UkWThhz", "featureStatus", undefined);
      var FeatureStatus = exports('FeatureStatus', /*#__PURE__*/function (FeatureStatus) {
        FeatureStatus["Normal"] = "normal";
        FeatureStatus["Activated"] = "activated";
        FeatureStatus["Disabled"] = "disabled";
        return FeatureStatus;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/game.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './playfieldModel.ts', './eventSignals.ts', './playfieldComponent.ts', './reelsData.ts', './gameplayCalculations.ts', './gameplayModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, director, Component, PlayfieldModel, playfieldLoadedSignal, setReelsSignal, PlayfieldComponent, bonusReelsData, generateRandomSymbols, GameplayModel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      PlayfieldModel = module.PlayfieldModel;
    }, function (module) {
      playfieldLoadedSignal = module.playfieldLoadedSignal;
      setReelsSignal = module.setReelsSignal;
    }, function (module) {
      PlayfieldComponent = module.PlayfieldComponent;
    }, function (module) {
      bonusReelsData = module.bonusReelsData;
    }, function (module) {
      generateRandomSymbols = module.generateRandomSymbols;
    }, function (module) {
      GameplayModel = module.GameplayModel;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "aed12wnk8BJH6gaIRGaeo9o", "game", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameComponent = exports('GameComponent', (_dec = ccclass('GameComponent'), _dec2 = property(PlayfieldComponent), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameComponent, _Component);
        function GameComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.playfieldModel = null;
          _this.gameplayModel = null;
          _initializerDefineProperty(_this, "playfieldComponent", _descriptor, _assertThisInitialized(_this));
          _this.isPaused = false;
          _this.playfieldLoadedBind = _this.playfieldLoadedHandler.bind(_assertThisInitialized(_this));
          _this.handleVisibilityChangeBind = _this.visibilityChangeHandler.bind(_assertThisInitialized(_this));
          return _this;
        }
        var _proto = GameComponent.prototype;
        _proto.onLoad = function onLoad() {
          playfieldLoadedSignal.addListener(this.playfieldLoadedBind);
          document.addEventListener('visibilitychange', this.handleVisibilityChangeBind);
        };
        _proto.onDestroy = function onDestroy() {
          playfieldLoadedSignal.removeListener(this.playfieldLoadedBind);
          document.removeEventListener('visibilitychange', this.handleVisibilityChangeBind);
        };
        _proto.visibilityChangeHandler = function visibilityChangeHandler() {
          if (document.hidden && !this.isPaused) {
            director.pause();
            this.isPaused = true;
          } else if (!document.hidden && this.isPaused) {
            director.resume();
            this.isPaused = false;
          }
        };
        _proto.playfieldLoadedHandler = function playfieldLoadedHandler() {
          this.playfieldComponent = this.node.scene.getComponentInChildren(PlayfieldComponent);
          this.playfieldModel = this.playfieldComponent.getComponent(PlayfieldModel);
          this.gameplayModel = this.node.scene.getComponentInChildren(GameplayModel);
          this.setStartSymbols();
          this.setStartGodSymbols();
        };
        _proto.setStartSymbols = function setStartSymbols() {
          var pillarCountPerGod = this.gameplayModel.getCurrentPillarCounts();
          var currentSymbols = generateRandomSymbols({
            pillarCountPerGod: pillarCountPerGod
          });
          this.playfieldModel.reels.forEach(function (r, i) {
            r.reelModel.result = currentSymbols[i];
          });
          setReelsSignal.dispatch({
            symbols: currentSymbols
          });
        };
        _proto.setStartGodSymbols = function setStartGodSymbols() {
          var currentBonusSymbols = [];
          var bonuscolumns = bonusReelsData.playFieldDimensions.columns;
          var bonusrows = bonusReelsData.playFieldDimensions.rows;
          for (var i = 0; i < bonuscolumns; i++) {
            // const columnValue = gameData.bonusValuePerColumn[i]; // Use this to check position of bonus symbols.
            var row = bonusrows[i];
            var symbolColumn = [];
            // const invisibleTopRow = (row.total - row.visible) * 0.5; // Use this to check position of bonus symbols.
            for (var j = 0; j < row.total; j++) {
              // symbolColumn.push({ value: j === invisibleTopRow ? columnValue : 0 }); // Use this to check position of bonus symbols.
              symbolColumn.push({
                value: 0
              });
            }
            currentBonusSymbols.push(symbolColumn.reverse());
          }
          this.playfieldModel.godReels.forEach(function (r, i) {
            r.reelModel.result = currentBonusSymbols[i];
          });
          setReelsSignal.dispatch({
            symbols: currentBonusSymbols,
            isGodReels: true
          });
        };
        return GameComponent;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "playfieldComponent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/gameClasses.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './godFeatureTypes.ts', './jackpotTypes.ts', './bonusTypes.ts', './roundTypes.ts', './bonusSideType.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _createClass, cclegacy, _decorator, Enum, Prefab, Node, CCInteger, CCFloat, Label, AudioClip, SpriteFrame, GodFeatureTypes, JackpotTypes, BonusItemTypes, BonusModifierTypes, RoundTypes, BonusSideType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Prefab = module.Prefab;
      Node = module.Node;
      CCInteger = module.CCInteger;
      CCFloat = module.CCFloat;
      Label = module.Label;
      AudioClip = module.AudioClip;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      GodFeatureTypes = module.GodFeatureTypes;
    }, function (module) {
      JackpotTypes = module.JackpotTypes;
    }, function (module) {
      BonusItemTypes = module.BonusItemTypes;
      BonusModifierTypes = module.BonusModifierTypes;
    }, function (module) {
      RoundTypes = module.RoundTypes;
    }, function (module) {
      BonusSideType = module.BonusSideType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _class4, _class5, _descriptor3, _descriptor4, _dec7, _dec8, _dec9, _class7, _class8, _descriptor5, _descriptor6, _dec10, _dec11, _dec12, _class10, _class11, _descriptor7, _descriptor8, _dec13, _dec14, _dec15, _dec16, _class13, _class14, _descriptor9, _descriptor10, _descriptor11, _dec17, _class16, _dec18, _dec19, _dec20, _class18, _class19, _descriptor12, _descriptor13, _dec21, _dec22, _dec23, _dec24, _class21, _class22, _descriptor14, _descriptor15, _descriptor16, _dec25, _dec26, _dec27, _class24, _class25, _descriptor17, _descriptor18, _dec28, _dec29, _dec30, _class27, _class28, _descriptor19, _descriptor20, _dec31, _dec32, _dec33, _dec34, _class30, _class31, _descriptor21, _descriptor22, _descriptor23, _dec35, _dec36, _dec37, _class33, _class34, _descriptor24, _descriptor25, _dec38, _dec39, _dec40, _class36, _class37, _descriptor26, _descriptor27, _dec41, _dec42, _dec43, _class39, _class40, _descriptor28, _descriptor29, _dec44, _dec45, _dec46, _class42, _class43, _descriptor30, _descriptor31;
      cclegacy._RF.push({}, "2922ffGmExIrqZRXxOSJO5s", "gameClasses", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GodCoins = exports('GodCoins', (_dec = ccclass('GodCoins'), _dec2 = property({
        type: Enum(GodFeatureTypes)
      }), _dec3 = property(Prefab), _dec(_class = (_class2 = function GodCoins() {
        _initializerDefineProperty(this, "type", _descriptor, this);
        _initializerDefineProperty(this, "prefab", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      var JackpotCoins = exports('JackpotCoins', (_dec4 = ccclass('JackpotCoins'), _dec5 = property({
        type: Enum(JackpotTypes)
      }), _dec6 = property(Prefab), _dec4(_class4 = (_class5 = function JackpotCoins() {
        _initializerDefineProperty(this, "type", _descriptor3, this);
        _initializerDefineProperty(this, "prefab", _descriptor4, this);
      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "type", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "prefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class5)) || _class4));
      var FeatureNode = exports('FeatureNode', (_dec7 = ccclass('FeatureNode'), _dec8 = property({
        type: Enum(GodFeatureTypes)
      }), _dec9 = property(Node), _dec7(_class7 = (_class8 = function FeatureNode() {
        _initializerDefineProperty(this, "type", _descriptor5, this);
        _initializerDefineProperty(this, "node", _descriptor6, this);
      }, (_descriptor5 = _applyDecoratedDescriptor(_class8.prototype, "type", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class8.prototype, "node", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class8)) || _class7));
      var JackpotNode = exports('JackpotNode', (_dec10 = ccclass('JackpotNode'), _dec11 = property({
        type: Enum(JackpotTypes)
      }), _dec12 = property(Node), _dec10(_class10 = (_class11 = function JackpotNode() {
        _initializerDefineProperty(this, "type", _descriptor7, this);
        _initializerDefineProperty(this, "node", _descriptor8, this);
      }, (_descriptor7 = _applyDecoratedDescriptor(_class11.prototype, "type", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class11.prototype, "node", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class11)) || _class10));
      var BonusItem = exports('BonusItem', (_dec13 = ccclass('BonusItem'), _dec14 = property({
        type: Enum(BonusItemTypes)
      }), _dec15 = property({
        type: Enum(BonusModifierTypes),
        visible: function visible() {
          return this.itemType === BonusItemTypes.Modifier;
        }
      }), _dec16 = property({
        type: Prefab
      }), _dec13(_class13 = (_class14 = function BonusItem() {
        _initializerDefineProperty(this, "itemType", _descriptor9, this);
        _initializerDefineProperty(this, "modifierType", _descriptor10, this);
        _initializerDefineProperty(this, "prefab", _descriptor11, this);
      }, (_descriptor9 = _applyDecoratedDescriptor(_class14.prototype, "itemType", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BonusItemTypes.None;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class14.prototype, "modifierType", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return undefined;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class14.prototype, "prefab", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class14)) || _class13));
      var ValueTypeNumber = exports('ValueTypeNumber', (_dec17 = ccclass('ValueTypeNumber'), _dec17(_class16 = function ValueTypeNumber() {
        this.value = void 0;
        this.type = void 0;
      }) || _class16));
      var RoundPlayfield = exports('RoundPlayfield', (_dec18 = ccclass('RoundPlayfield'), _dec19 = property({
        type: Enum(RoundTypes)
      }), _dec20 = property(Node), _dec18(_class18 = (_class19 = function RoundPlayfield() {
        _initializerDefineProperty(this, "type", _descriptor12, this);
        _initializerDefineProperty(this, "target", _descriptor13, this);
      }, (_descriptor12 = _applyDecoratedDescriptor(_class19.prototype, "type", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return RoundTypes.Normal;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class19.prototype, "target", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class19)) || _class18));
      var ExcludedBonusItem = exports('ExcludedBonusItem', (_dec21 = ccclass('ExcludedBonusItem'), _dec22 = property({
        type: Enum(BonusItemTypes)
      }), _dec23 = property({
        type: Enum(BonusModifierTypes),
        visible: function visible() {
          return this.itemType === BonusItemTypes.Modifier;
        }
      }), _dec24 = property({
        type: Enum(JackpotTypes),
        visible: function visible() {
          return this.itemType === BonusItemTypes.Jackpot;
        }
      }), _dec21(_class21 = (_class22 = function ExcludedBonusItem() {
        _initializerDefineProperty(this, "itemType", _descriptor14, this);
        _initializerDefineProperty(this, "modifierType", _descriptor15, this);
        _initializerDefineProperty(this, "jackpotType", _descriptor16, this);
      }, (_descriptor14 = _applyDecoratedDescriptor(_class22.prototype, "itemType", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BonusItemTypes.None;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class22.prototype, "modifierType", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return undefined;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class22.prototype, "jackpotType", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return undefined;
        }
      })), _class22)) || _class21));
      var PrizeData = exports('PrizeData', (_dec25 = ccclass('PrizeData'), _dec26 = property(CCInteger), _dec27 = property(CCFloat), _dec25(_class24 = (_class25 = function PrizeData() {
        _initializerDefineProperty(this, "winlineCount", _descriptor17, this);
        _initializerDefineProperty(this, "multiplier", _descriptor18, this);
      }, (_descriptor17 = _applyDecoratedDescriptor(_class25.prototype, "winlineCount", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class25.prototype, "multiplier", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class25)) || _class24));
      var SymbolPrize = exports('SymbolPrize', (_dec28 = ccclass('SymbolPrize'), _dec29 = property(CCInteger), _dec30 = property({
        type: [PrizeData]
      }), _dec28(_class27 = (_class28 = /*#__PURE__*/function () {
        function SymbolPrize() {
          _initializerDefineProperty(this, "symbolValue", _descriptor19, this);
          _initializerDefineProperty(this, "prizeData", _descriptor20, this);
        }
        var _proto = SymbolPrize.prototype;
        _proto.getMultiplier = function getMultiplier(winlineCount) {
          var _this$prizeData$filte, _this$prizeData$find$, _this$prizeData$find;
          var lowestWinlineCount = Math.min.apply(Math, this.prizeData.map(function (item) {
            return item.winlineCount;
          }));
          if (winlineCount < lowestWinlineCount) {
            return 0;
          }
          var closestWinlineCount = (_this$prizeData$filte = this.prizeData.filter(function (item) {
            return winlineCount >= item.winlineCount;
          }).sort(function (a, b) {
            return b.winlineCount - a.winlineCount;
          })[0]) == null ? void 0 : _this$prizeData$filte.winlineCount;
          return (_this$prizeData$find$ = (_this$prizeData$find = this.prizeData.find(function (item) {
            return item.winlineCount === closestWinlineCount;
          })) == null ? void 0 : _this$prizeData$find.multiplier) != null ? _this$prizeData$find$ : 1;
        };
        return SymbolPrize;
      }(), (_descriptor19 = _applyDecoratedDescriptor(_class28.prototype, "symbolValue", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class28.prototype, "prizeData", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class28)) || _class27));
      var BonusSpins = exports('BonusSpins', (_dec31 = ccclass('BonusSpins'), _dec32 = property({
        type: Enum(BonusSideType)
      }), _dec33 = property(Label), _dec34 = property(Label), _dec31(_class30 = (_class31 = /*#__PURE__*/function () {
        function BonusSpins() {
          _initializerDefineProperty(this, "sideType", _descriptor21, this);
          _initializerDefineProperty(this, "spinsLeftLbl", _descriptor22, this);
          _initializerDefineProperty(this, "spinsTotalLbl", _descriptor23, this);
        }
        _createClass(BonusSpins, [{
          key: "spinsTotalCount",
          get: function get() {
            if (!this.spinsTotalLbl) {
              return 0;
            }
            return Number(this.spinsTotalLbl.string);
          },
          set: function set(value) {
            if (!this.spinsTotalLbl) {
              return;
            }
            this.spinsTotalLbl.string = value.toFixed(0);
          }
        }, {
          key: "spinsLeftCount",
          get: function get() {
            if (!this.spinsLeftLbl) {
              return 0;
            }
            return Number(this.spinsLeftLbl.string);
          },
          set: function set(value) {
            if (!this.spinsLeftLbl) {
              return;
            }
            this.spinsLeftLbl.string = value.toFixed(0);
          }
        }]);
        return BonusSpins;
      }(), (_descriptor21 = _applyDecoratedDescriptor(_class31.prototype, "sideType", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BonusSideType.Center;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class31.prototype, "spinsLeftLbl", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class31.prototype, "spinsTotalLbl", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class31)) || _class30));
      var BonusMainMultiplier = exports('BonusMainMultiplier', (_dec35 = ccclass('BonusMainMultiplier'), _dec36 = property({
        type: Enum(GodFeatureTypes)
      }), _dec37 = property(Label), _dec35(_class33 = (_class34 = /*#__PURE__*/function () {
        function BonusMainMultiplier() {
          _initializerDefineProperty(this, "godFeatureType", _descriptor24, this);
          _initializerDefineProperty(this, "multiplierLbl", _descriptor25, this);
        }
        _createClass(BonusMainMultiplier, [{
          key: "mainMultiplier",
          get: function get() {
            var _this$multiplierLbl$s, _this$multiplierLbl;
            return parseFloat((_this$multiplierLbl$s = (_this$multiplierLbl = this.multiplierLbl) == null ? void 0 : _this$multiplierLbl.string.replace('X', '')) != null ? _this$multiplierLbl$s : '1');
          },
          set: function set(value) {
            this.multiplierLbl.string = 'X' + value.toFixed(2);
          }
        }]);
        return BonusMainMultiplier;
      }(), (_descriptor24 = _applyDecoratedDescriptor(_class34.prototype, "godFeatureType", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return GodFeatureTypes.Athena;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class34.prototype, "multiplierLbl", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class34)) || _class33));
      var BackGroundAudio = exports('BackGroundAudio', (_dec38 = ccclass('BackGroundAudio'), _dec39 = property({
        type: Enum(RoundTypes)
      }), _dec40 = property(AudioClip), _dec38(_class36 = (_class37 = function BackGroundAudio() {
        _initializerDefineProperty(this, "type", _descriptor26, this);
        _initializerDefineProperty(this, "audioClip", _descriptor27, this);
      }, (_descriptor26 = _applyDecoratedDescriptor(_class37.prototype, "type", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class37.prototype, "audioClip", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class37)) || _class36));
      var GodAudio = exports('GodAudio', (_dec41 = ccclass('GodAudio'), _dec42 = property({
        type: Enum(GodFeatureTypes)
      }), _dec43 = property(AudioClip), _dec41(_class39 = (_class40 = function GodAudio() {
        _initializerDefineProperty(this, "type", _descriptor28, this);
        _initializerDefineProperty(this, "audioClip", _descriptor29, this);
      }, (_descriptor28 = _applyDecoratedDescriptor(_class40.prototype, "type", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor29 = _applyDecoratedDescriptor(_class40.prototype, "audioClip", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class40)) || _class39));
      var RoundBackground = exports('RoundBackground', (_dec44 = ccclass('RoundBackground'), _dec45 = property({
        type: Enum(RoundTypes)
      }), _dec46 = property(SpriteFrame), _dec44(_class42 = (_class43 = function RoundBackground() {
        _initializerDefineProperty(this, "type", _descriptor30, this);
        _initializerDefineProperty(this, "texture", _descriptor31, this);
      }, (_descriptor30 = _applyDecoratedDescriptor(_class43.prototype, "type", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor31 = _applyDecoratedDescriptor(_class43.prototype, "texture", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class43)) || _class42));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/gameData.ts", ['cc', './godFeatureTypes.ts', './jackpotTypes.ts', './specialSymbols.ts'], function (exports) {
  var cclegacy, GodFeatureTypes, JackpotTypes, SpecialSymbolTypes;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GodFeatureTypes = module.GodFeatureTypes;
    }, function (module) {
      JackpotTypes = module.JackpotTypes;
    }, function (module) {
      SpecialSymbolTypes = module.SpecialSymbolTypes;
    }],
    execute: function () {
      var _maxSpecialSymbolCoun, _transforms;
      cclegacy._RF.push({}, "27a31UMRTRDlZbohVoiUp35", "gameData", undefined);
      var gameData = exports('gameData', {
        respin: {
          possibleCount: 3,
          removeCount: {
            min: 3,
            max: 6
          }
        },
        bonus: {
          tumble: {
            minimumCount: 6,
            multiplierPerCount: {
              6: 1,
              8: 1,
              10: 1,
              12: 1,
              14: 1
            }
          },
          mainMultipliers: {
            increaseCount: 0.25
          }
        },
        freeSpins: {
          fillAmount: 5,
          maxSpecialSymbolCount: (_maxSpecialSymbolCoun = {}, _maxSpecialSymbolCoun[SpecialSymbolTypes.Wild] = 6, _maxSpecialSymbolCoun[SpecialSymbolTypes.Multiplier] = 3, _maxSpecialSymbolCoun)
        },
        winlines: {
          minimumCount: 8
        },
        godTypePerColumn: [GodFeatureTypes.Ares, GodFeatureTypes.Ares, GodFeatureTypes.Ares, undefined, GodFeatureTypes.Athena, GodFeatureTypes.Athena, GodFeatureTypes.Athena],
        jackpotTypesPerColumn: [[JackpotTypes.Unreal, JackpotTypes.Warlord, JackpotTypes.Mythic], [JackpotTypes.Unreal, JackpotTypes.Warlord, JackpotTypes.Mythic], [JackpotTypes.Unreal, JackpotTypes.Warlord, JackpotTypes.Mythic], [JackpotTypes.Unreal, JackpotTypes.Warlord, JackpotTypes.Mythic, JackpotTypes.Divine, JackpotTypes.Heroic, JackpotTypes.Legendary], [JackpotTypes.Divine, JackpotTypes.Heroic, JackpotTypes.Legendary], [JackpotTypes.Divine, JackpotTypes.Heroic, JackpotTypes.Legendary], [JackpotTypes.Divine, JackpotTypes.Heroic, JackpotTypes.Legendary]],
        coinburst: {
          thresholds: {
            normal: {
              multiplier: 5
            },
            big: {
              multiplier: 20
            },
            "super": {
              multiplier: 50
            },
            mega: {
              multiplier: 100
            }
          }
        },
        symbolCount: {
          normal: 9,
          special: 2,
          total: 11
        },
        tension: {},
        gods: {
          maxPillarValue: 40,
          startPillarCount: 10,
          averageTriggerCount: 10,
          freeSpinCount: 10,
          transforms: (_transforms = {}, _transforms[GodFeatureTypes.Ares] = {
            pot: {
              begin: -40,
              end: 120
            },
            coins: {
              hidden: 110,
              begin: 115,
              end: 165
            }
          }, _transforms[GodFeatureTypes.Athena] = {
            pot: {
              begin: -40,
              end: 120
            },
            coins: {
              hidden: 110,
              begin: 115,
              end: 165
            }
          }, _transforms)
        },
        timings: {
          pre: {
            fast: 100,
            winline: 600,
            loop: 600
          },
          winlines: {
            normal: {
              lineSpeed: 3000,
              perSymbol: 75,
              perWinline: 1000
            },
            fast: {
              lineSpeed: 5000,
              perSymbol: 40,
              perWinline: 600
            },
            sound: {
              perWinline: 400
            }
          }
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/gameInput.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './playfieldModel.ts', './godFeatureTypes.ts', './gameplayModel.ts', './eventSignals.ts', './roundTypes.ts', './bonusModel.ts', './bonusSideType.ts', './specialSymbols.ts', './hudModel.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, input, Input, KeyCode, Component, PlayfieldModel, GodFeatureTypes, GameplayModel, increaseTumbleCountSignal, setRoundTypeSignal, bonusStartRollsSignal, bonusStopRollsSignal, freeSpinsActivateAnimationSignal, respinGodsSignal, RoundTypes, BonusModel, BonusSideType, SpecialSymbolTypes, HudModel;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      Component = module.Component;
    }, function (module) {
      PlayfieldModel = module.PlayfieldModel;
    }, function (module) {
      GodFeatureTypes = module.GodFeatureTypes;
    }, function (module) {
      GameplayModel = module.GameplayModel;
    }, function (module) {
      increaseTumbleCountSignal = module.increaseTumbleCountSignal;
      setRoundTypeSignal = module.setRoundTypeSignal;
      bonusStartRollsSignal = module.bonusStartRollsSignal;
      bonusStopRollsSignal = module.bonusStopRollsSignal;
      freeSpinsActivateAnimationSignal = module.freeSpinsActivateAnimationSignal;
      respinGodsSignal = module.respinGodsSignal;
    }, function (module) {
      RoundTypes = module.RoundTypes;
    }, function (module) {
      BonusModel = module.BonusModel;
    }, function (module) {
      BonusSideType = module.BonusSideType;
    }, function (module) {
      SpecialSymbolTypes = module.SpecialSymbolTypes;
    }, function (module) {
      HudModel = module.HudModel;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "34a09f3Bx9LKoQ9+ObUDAgE", "gameInput", undefined);
      var ccclass = _decorator.ccclass;
      var GameInput = exports('GameInput', (_dec = ccclass('GameInput'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameInput, _Component);
        function GameInput() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.playfieldModel = null;
          _this.bonusModel = null;
          _this.gameplayModel = null;
          _this.hudModel = null;
          return _this;
        }
        var _proto = GameInput.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          input.on(Input.EventType.KEY_UP, function (event) {
            if (event.keyCode === KeyCode.SPACE) {
              if (_this2.playfieldModel.reelsRolling || !_this2.gameplayModel.canStartRound || _this2.hudModel.isAutoplayStarted || _this2.gameplayModel.bonusStarted) {
                return;
              }
              _this2.gameplayModel.startRound(_this2.playfieldModel, _this2.bonusModel);
            }
            {
              if (event.keyCode === KeyCode.KEY_R) {
                _this2.gameplayModel.changeReelSpinDirection();
              }
              if (event.keyCode === KeyCode.KEY_V) {
                increaseTumbleCountSignal.dispatch(1);
              }
              if (event.keyCode === KeyCode.KEY_B) {
                _this2.gameplayModel.bonusFeatureTrigger(GodFeatureTypes.Ares);
              }
              if (event.keyCode === KeyCode.KEY_N) {
                _this2.gameplayModel.bonusFeatureTrigger(GodFeatureTypes.Athena);
              }
              if (event.keyCode === KeyCode.KEY_U) {
                var roundType = _this2.gameplayModel.roundType === RoundTypes.FreeSpin ? RoundTypes.Normal : RoundTypes.FreeSpin;
                setRoundTypeSignal.dispatch({
                  roundType: roundType
                });
              }
              if (event.keyCode === KeyCode.KEY_J) {
                var _roundType = _this2.gameplayModel.roundType === RoundTypes.Bonus ? RoundTypes.Normal : RoundTypes.Bonus;
                var mainMultiplier = _this2.playfieldModel.setMultiplierFromTumbleCount(6);
                _this2.bonusModel.setAllMainMultipliers(mainMultiplier);
                setRoundTypeSignal.dispatch({
                  roundType: _roundType
                });
              }
              if (event.keyCode === KeyCode.KEY_K && _this2.gameplayModel.roundType === RoundTypes.Bonus) {
                var values = Object.values(BonusSideType).map(function (v) {
                  return v;
                });
                values.forEach(function (sideType) {
                  bonusStartRollsSignal.dispatch({
                    sideType: sideType
                  });
                });
              }
              if (event.keyCode === KeyCode.KEY_L && _this2.gameplayModel.roundType === RoundTypes.Bonus) {
                var _values = Object.values(BonusSideType).map(function (v) {
                  return v;
                });
                _values.forEach(function (sideType) {
                  bonusStopRollsSignal.dispatch({
                    sideType: sideType
                  });
                });
              }
              if (event.keyCode === KeyCode.KEY_I && _this2.gameplayModel.roundType === RoundTypes.Bonus) {
                var _this2$bonusModel$bon;
                // Stop bonus round by resetting result and tumble count
                _this2.bonusModel.bonusResult = (_this2$bonusModel$bon = {}, _this2$bonusModel$bon[BonusSideType.Left] = [], _this2$bonusModel$bon[BonusSideType.Center] = [], _this2$bonusModel$bon[BonusSideType.Right] = [], _this2$bonusModel$bon);
                _this2.playfieldModel.tumbleTotalCount = 0;
              }
              if (event.keyCode === KeyCode.ENTER) {
                var _activatedSpecialCoun;
                freeSpinsActivateAnimationSignal.dispatch({
                  activatedSpecialCount: (_activatedSpecialCoun = {}, _activatedSpecialCoun[SpecialSymbolTypes.Wild] = 9, _activatedSpecialCoun[SpecialSymbolTypes.Multiplier] = 6, _activatedSpecialCoun)
                });
              }
              if (event.keyCode === KeyCode.KEY_F) {
                respinGodsSignal.dispatch({
                  columnIds: [0, 1, 2]
                });
              }
            }
          });
        };
        _proto.start = function start() {
          this.playfieldModel = this.node.scene.getComponentInChildren(PlayfieldModel);
          this.gameplayModel = this.node.scene.getComponentInChildren(GameplayModel);
          this.bonusModel = this.node.scene.getComponentInChildren(BonusModel);
          this.hudModel = this.node.scene.getComponentInChildren(HudModel);
        };
        return GameInput;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/gameplayCalculations.ts", ['cc', './coinData.ts', './gameData.ts', './godFeatureTypes.ts', './jackpotTypes.ts', './reelsData.ts', './randomizer.ts', './specialSymbols.ts'], function (exports) {
  var cclegacy, CoinTypes, gameData, GodFeatureTypes, godFeatureTypeToId, idToGodFeatureType, jackpotTypeToWeight, reelsData, bonusReelsData, Randomizer, createWeightedTable, SpecialSymbolTypes, specialSymbolIdToType, godTypeToSpecialSymbolType, specialSymbolTypeToGodType, specialSymbolTypeToId;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      CoinTypes = module.CoinTypes;
    }, function (module) {
      gameData = module.gameData;
    }, function (module) {
      GodFeatureTypes = module.GodFeatureTypes;
      godFeatureTypeToId = module.godFeatureTypeToId;
      idToGodFeatureType = module.idToGodFeatureType;
    }, function (module) {
      jackpotTypeToWeight = module.jackpotTypeToWeight;
    }, function (module) {
      reelsData = module.reelsData;
      bonusReelsData = module.bonusReelsData;
    }, function (module) {
      Randomizer = module.Randomizer;
      createWeightedTable = module.createWeightedTable;
    }, function (module) {
      SpecialSymbolTypes = module.SpecialSymbolTypes;
      specialSymbolIdToType = module.specialSymbolIdToType;
      godTypeToSpecialSymbolType = module.godTypeToSpecialSymbolType;
      specialSymbolTypeToGodType = module.specialSymbolTypeToGodType;
      specialSymbolTypeToId = module.specialSymbolTypeToId;
    }],
    execute: function () {
      exports({
        addGodCoinsToCoinsResult: addGodCoinsToCoinsResult,
        drawChanceOfGodFeatureTrigger: drawChanceOfGodFeatureTrigger,
        drawChanceOfRandomGodFeature: drawChanceOfRandomGodFeature,
        drawGodsInReels: drawGodsInReels,
        drawRandomGodFeatureActivation: drawRandomGodFeatureActivation,
        drawRandomGodFeatureAmount: drawRandomGodFeatureAmount,
        generateGodReelResult: generateGodReelResult,
        generateGodReelsResult: generateGodReelsResult,
        generateGodResult: generateGodResult,
        generateJackpotCoinsResult: generateJackpotCoinsResult,
        generateJackpotCoinsResultTwo: generateJackpotCoinsResultTwo,
        generateRandomSymbols: generateRandomSymbols,
        getGodFeatureTypeSymbolsAmount: getGodFeatureTypeSymbolsAmount,
        getGodReelsResult: getGodReelsResult,
        getJackpotTypeWeightedList: getJackpotTypeWeightedList,
        groupOfTen: groupOfTen
      });
      var _randomGodFeatureOnBo, _godFeatureDuringFree;
      cclegacy._RF.push({}, "bb4f1E83lhGIYtA/FVPrOqi", "gameplayCalculations", undefined);
      var chanceOfRandomGodFeaturePct = 10;
      var chanceOfGodFeatureTriggerPct = 1;
      var godSymbolPct = 15; // During roll
      var godInReelPercentageList = [8, 5, 1, 0, 1, 5, 8]; // Xavier's implementation
      var godCoinPct = 50;
      var mainJackpotCoinPct = 8;
      var freeSpinJackpotCoinPct = 2;
      var randomizer = exports('randomizer', new Randomizer());
      var specialSymbolWildOnBonusHolderHitTable = exports('specialSymbolWildOnBonusHolderHitTable', [{
        value: 0,
        weight: 90
      }, {
        value: 1,
        weight: 30
      }, {
        value: 2,
        weight: 5
      }, {
        value: 3,
        weight: 1
      }]);
      var specialSymbolMultiplierOnBonusHolderHitTable = exports('specialSymbolMultiplierOnBonusHolderHitTable', [{
        value: 0,
        weight: 50
      }, {
        value: 1,
        weight: 20
      }, {
        value: 2,
        weight: 10
      }, {
        value: 3,
        weight: 1
      }]);
      var randomGodFeatureOnBonusHolderHitTable = exports('randomGodFeatureOnBonusHolderHitTable', (_randomGodFeatureOnBo = {}, _randomGodFeatureOnBo[GodFeatureTypes.Ares] = createWeightedTable(specialSymbolWildOnBonusHolderHitTable), _randomGodFeatureOnBo[GodFeatureTypes.Athena] = createWeightedTable(specialSymbolMultiplierOnBonusHolderHitTable), _randomGodFeatureOnBo));
      function generateRandomSymbols(data) {
        var _data$currentSymbols, _data$specials$length, _data$specials, _specialsInGrid, _maxSpecialSymbolCoun;
        var currentSymbols = (_data$currentSymbols = data == null ? void 0 : data.currentSymbols) != null ? _data$currentSymbols : Array(reelsData.playFieldDimensions.columns).fill([]);
        var rowsPerColumn = data != null && data.gods ? bonusReelsData.playFieldDimensions.rows : reelsData.playFieldDimensions.rows;
        var columns = data != null && data.gods ? bonusReelsData.playFieldDimensions.columns : reelsData.playFieldDimensions.columns;
        var hasSpecials = ((_data$specials$length = data == null || (_data$specials = data.specials) == null ? void 0 : _data$specials.length) != null ? _data$specials$length : 0) > 0;
        var specialsInGrid = (_specialsInGrid = {}, _specialsInGrid[SpecialSymbolTypes.Wild] = 0, _specialsInGrid[SpecialSymbolTypes.Multiplier] = 0, _specialsInGrid);
        var maxSpecialSymbolCount = (_maxSpecialSymbolCoun = {}, _maxSpecialSymbolCoun[SpecialSymbolTypes.Wild] = data.pillarCountPerGod ? getGodFeatureTypeSymbolsAmount(GodFeatureTypes.Ares, data.pillarCountPerGod[GodFeatureTypes.Ares]) : 0, _maxSpecialSymbolCoun[SpecialSymbolTypes.Multiplier] = data.pillarCountPerGod ? getGodFeatureTypeSymbolsAmount(GodFeatureTypes.Athena, data.pillarCountPerGod[GodFeatureTypes.Athena]) : 0, _maxSpecialSymbolCoun);
        //Reverse because cocos y axis is inverted
        for (var col = 0; col < columns; col++) {
          var _data$currentSymbols$, _data$currentSymbols2;
          if (data != null && data.includedColumns && !(data != null && data.includedColumns[col])) {
            continue;
          }
          var column = (_data$currentSymbols$ = data == null || (_data$currentSymbols2 = data.currentSymbols) == null ? void 0 : _data$currentSymbols2[col]) != null ? _data$currentSymbols$ : Array(reelsData.playFieldDimensions.rows[col].total).fill({
            value: 0
          });
          var rows = rowsPerColumn[col].total;
          var invisibleCount = reelsData.playFieldDimensions.rows[col].total - reelsData.playFieldDimensions.rows[col].visible;
          var startCount = invisibleCount * 0.5;
          var endCount = rows - 1 - startCount;
          for (var row = 0; row < rows; row++) {
            var value = 0;
            if (hasSpecials && row >= startCount && row <= endCount) {
              // Only show specials in the visible part of the reels
              do {
                value = randomizer.betterRandom({
                  gods: data == null ? void 0 : data.gods,
                  specials: data == null ? void 0 : data.specials,
                  cheat: data == null ? void 0 : data.cheat
                });
              } while (specialsInGrid[specialSymbolIdToType[value]] && specialsInGrid[specialSymbolIdToType[value]] >= maxSpecialSymbolCount[specialSymbolIdToType[value]]);
              if (specialSymbolIdToType[value]) {
                specialsInGrid[specialSymbolIdToType[value]]++;
              }
            } else {
              value = randomizer.betterRandom({
                gods: data == null ? void 0 : data.gods,
                cheat: data == null ? void 0 : data.cheat
              });
            }
            column[row] = {
              value: value
            };
          }
          currentSymbols[col] = column;
        }
        return currentSymbols;
      }
      function drawRandomGodFeatureActivation(data) {
        var _result;
        var result = (_result = {}, _result[SpecialSymbolTypes.Wild] = 0, _result[SpecialSymbolTypes.Multiplier] = 0, _result);
        var allGodTypes = Object.values(GodFeatureTypes).map(function (v) {
          return v;
        });
        for (var i = 0; i < allGodTypes.length; i++) {
          var _data$godCoinDrawn;
          var specialType = godTypeToSpecialSymbolType[allGodTypes[i]];
          if ((_data$godCoinDrawn = data.godCoinDrawn) != null && _data$godCoinDrawn.includes(allGodTypes[i]) && (drawChanceOfRandomGodFeature() || data.cheat)) {
            result[specialType] = drawRandomGodFeatureAmount(specialSymbolTypeToGodType[specialType]);
          }
        }
        return result;
      }
      function drawChanceOfRandomGodFeature() {
        var randomPercentage = Math.floor(Math.random() * 100);
        return chanceOfRandomGodFeaturePct > randomPercentage;
      }
      function drawChanceOfGodFeatureTrigger() {
        var randomPercentage = Math.floor(Math.random() * 150); // 1 on 150
        return chanceOfGodFeatureTriggerPct > randomPercentage;
      }
      function drawRandomGodFeatureAmount(godType) {
        var table = randomGodFeatureOnBonusHolderHitTable[godType];
        var randomIndex = Math.floor(Math.random() * table.length);
        return table[randomIndex];
      }
      function drawGodsInReels(data) {
        var result = [];
        if (data.isRespin && !data.useGodReels) {
          return result;
        }

        // const currentPercentage = data.isEndResult ? godSymbolPercentageEndResult : godSymbolPercentage;
        for (var i = 0; i < data.columnCount; i++) {
          if (data.excludeColumnIndices.includes(i)) {
            result.push(false);
            continue;
          }
          var randomPercentage = Math.floor(Math.random() * 100);
          var currentPercentage = data.isEndResult ? godInReelPercentageList[i] : godSymbolPct; // Xavier's implementation
          var activate = data.cheat ? true : randomPercentage < currentPercentage;
          result.push(activate);
        }
        return result;
      }
      function generateGodReelsResult(data) {
        var result = [];
        for (var i = 0; i < data.reelsData.playFieldDimensions.columns; i++) {
          var _data$godValuePerColu, _data$hasGodInReels$i, _data$hasGodInReels;
          result.push(generateGodReelResult({
            columnId: i,
            godValue: (_data$godValuePerColu = data.godValuePerColumn[i]) != null ? _data$godValuePerColu : 0,
            reelsData: data.reelsData,
            hasGodColumn: data.hasGodInReels ? (_data$hasGodInReels$i = (_data$hasGodInReels = data.hasGodInReels) == null ? void 0 : _data$hasGodInReels[i]) != null ? _data$hasGodInReels$i : false : false,
            isEndResult: data.isEndResult
          }));
        }
        return result;
      }
      function generateGodReelResult(data) {
        var row = data.reelsData.playFieldDimensions.rows[data.columnId];
        if (!data.isEndResult) {
          var range = row.visible * 2;
          var randomIndex = Math.floor(Math.random() * range);
          return Array.from({
            length: row.total
          }).map(function (v, i) {
            return {
              value: i === randomIndex ? data.godValue : 0
            };
          });
        } else {
          var symbolColumn = [];
          var invisibleTopRow = (row.total - row.visible) * 0.5;
          for (var j = 0; j < row.total; j++) {
            symbolColumn.push({
              value: j === invisibleTopRow && data.hasGodColumn ? data.godValue : 0
            });
          }
          return symbolColumn.reverse();
        }
      }
      function generateGodResult(data) {
        var row = data.reelsData.playFieldDimensions.rows[data.columnId];
        var coinsResult = [];
        var start = Math.floor((row.total - row.visible) / 2);
        var end = start + row.visible;
        var hasReceivedGodCoin = false;
        var randomIndices = Array.from({
          length: row.total
        }).map(function (item, i) {
          var randomPercentage = Math.floor(Math.random() * 100);
          var activate = data.cheat ? true : hasReceivedGodCoin ? false : godCoinPct > randomPercentage;
          if (activate && !hasReceivedGodCoin) {
            hasReceivedGodCoin = true;
          }
          return i >= start && i < end ? activate ? 1 : 0 : 0;
        });
        for (var j = 0; j < row.total; j++) {
          var godValue = data.freeSpins ? 0 : data.godValue;
          coinsResult.push({
            value: randomIndices[j] > 0 ? godValue : 0
          });
        }
        return coinsResult;
      }
      function generateJackpotCoinsResult(data) {
        var coinsResult = [];
        if (data.isRespin) {
          return coinsResult;
        }
        var columns = data.reelsData.playFieldDimensions.columns;
        var _loop = function _loop() {
          var row = data.reelsData.playFieldDimensions.rows[c];
          var start = Math.floor((row.total - row.visible) / 2);
          var end = start + row.visible;
          var randomIndices = Array.from({
            length: row.total
          }).map(function (item, i) {
            var randomPercentage = Math.floor(Math.random() * 100);
            var jackpotCoinPercentage = data.freeSpins ? freeSpinJackpotCoinPct : mainJackpotCoinPct;
            return i >= start && i < end ? jackpotCoinPercentage > randomPercentage ? 1 : 0 : 0;
          });
          var columnResult = [];
          for (var r = 0; r < row.total; r++) {
            var hasJackpotCoin = randomIndices[r] > 0;
            if (!data.jackpotTypePerColumn && !data.jackpotTypes) {
              console.error('No jackpot types or jackpot type per column');
            } else {
              var _ref, _data$jackpotTypes$le, _data$jackpotTypes, _data$jackpotTypePerC;
              var randomJackpotIndex = Math.floor(Math.random() * ((_ref = (_data$jackpotTypes$le = (_data$jackpotTypes = data.jackpotTypes) == null ? void 0 : _data$jackpotTypes.length) != null ? _data$jackpotTypes$le : (_data$jackpotTypePerC = data.jackpotTypePerColumn) == null ? void 0 : _data$jackpotTypePerC.length) != null ? _ref : 0));
              var jackpotType = data.jackpotTypePerColumn ? data.jackpotTypePerColumn[c] : data.jackpotTypes[randomJackpotIndex];
              columnResult.push({
                coinType: hasJackpotCoin ? CoinTypes.Jackpot : undefined,
                valueType: hasJackpotCoin ? jackpotType : undefined
              });
            }
          }
          coinsResult.push(columnResult);
        };
        for (var c = 0; c < columns; c++) {
          _loop();
        }
        return coinsResult;
      }
      function generateJackpotCoinsResultTwo(data) {
        var coinsResult = [];
        if (data.isRespin) {
          return coinsResult;
        }
        var columns = data.reelsData.playFieldDimensions.columns;
        var _loop2 = function _loop2() {
            var _data$jackpotTypesPer;
            var row = data.reelsData.playFieldDimensions.rows[c];
            var start = Math.floor((row.total - row.visible) / 2);
            var end = start + row.visible;
            var randomIndices = Array.from({
              length: row.total
            }).map(function (item, i) {
              var randomPercentage = Math.floor(Math.random() * 100);
              var jackpotCoinPercentage = data.freeSpins ? freeSpinJackpotCoinPct : mainJackpotCoinPct;
              return i >= start && i < end ? jackpotCoinPercentage > randomPercentage ? 1 : 0 : 0;
            });
            if (!data.jackpotTypesPerColumn) {
              console.error('No jackpot types per column');
              return 0; // continue
            }
            //Check which features are activated during Free Spin and only the respective jackpot coins to those columns
            if (data.freeSpins && !data.activeGods.includes(godFeatureTypeToId[data.jackpotTypesPerColumn[c][0]])) {
              return 0; // continue
            }

            var columnResult = [];
            var jackpotTypesPerColumn = (_data$jackpotTypesPer = data.jackpotTypesPerColumn) == null ? void 0 : _data$jackpotTypesPer[c];
            if (jackpotTypesPerColumn) {
              var jackpotTypeWeightedList = getJackpotTypeWeightedList(jackpotTypesPerColumn);
              for (var r = 0; r < row.total; r++) {
                var hasJackpotCoin = randomIndices[r] > 0;
                var randomJackpotIndex = Math.floor(Math.random() * jackpotTypeWeightedList.length);
                var jackpotType = jackpotTypeWeightedList[randomJackpotIndex];
                columnResult.push({
                  coinType: hasJackpotCoin ? CoinTypes.Jackpot : undefined,
                  valueType: hasJackpotCoin ? jackpotType : undefined
                });
              }
            } else {
              console.error('No jackpot types');
            }
            coinsResult.push(columnResult);
          },
          _ret;
        for (var c = 0; c < columns; c++) {
          _ret = _loop2();
          if (_ret === 0) continue;
        }
        return coinsResult;
      }
      function getJackpotTypeWeightedList(includedJackpotTypes) {
        var keys = Object.keys(jackpotTypeToWeight).map(function (key) {
          return key;
        }).filter(function (key) {
          return includedJackpotTypes.includes(key);
        });
        var jackpotList = [];
        keys.forEach(function (key) {
          var value = jackpotTypeToWeight[key];
          jackpotList.push.apply(jackpotList, Array(value).fill(key));
        });
        return jackpotList;
      }
      function addGodCoinsToCoinsResult(coinsResult, data) {
        if (coinsResult.length === 0) {
          return coinsResult;
        }
        var columns = data.reelsData.playFieldDimensions.columns;
        for (var col = 0; col < columns; col++) {
          var _godFeatureTypeToId$g;
          var jackpotGodResult = [];
          if (data.freeSpins) {
            var _data$jackpotGodTypeP;
            // jackpotGodResult = generateJackpotCoinsResult({ jackpotTypePerColumn: data.jackpotGodTypePerColumn, reelsData: data.reelsData, freeSpins: data.freeSpins });
            var jackpotTypesPerColumn = (_data$jackpotGodTypeP = data.jackpotGodTypePerColumn) == null ? void 0 : _data$jackpotGodTypeP.map(function (item) {
              return [item];
            });
            jackpotGodResult = generateJackpotCoinsResultTwo({
              reelsData: data.reelsData,
              activeGods: data.activeGods,
              jackpotTypesPerColumn: jackpotTypesPerColumn,
              freeSpins: data.freeSpins
            });
            console.log('addGodCoinsToCoinsResult | jackpotGodResult', jackpotGodResult);
          }
          var godResult = generateGodResult({
            columnId: col,
            godValue: (_godFeatureTypeToId$g = godFeatureTypeToId[gameData.godTypePerColumn[col]]) != null ? _godFeatureTypeToId$g : 0,
            reelsData: data.reelsData,
            freeSpins: data.freeSpins,
            cheat: data.cheat
          });
          var reelResultCoins = [];
          for (var row = 0; row < data.reelsData.playFieldDimensions.rows[col].total; row++) {
            var _jackpotGodResult;
            var godCoinValue = godResult[row].value;
            var currentResult = coinsResult[col][row];
            if (godCoinValue > 0 && data.hasGodInReels[col]) {
              reelResultCoins.push({
                coinType: CoinTypes.God,
                valueType: idToGodFeatureType[godCoinValue]
              });
            } else if ((_jackpotGodResult = jackpotGodResult) != null && (_jackpotGodResult = _jackpotGodResult[col]) != null && _jackpotGodResult[row] && ((currentResult == null ? void 0 : currentResult.coinType) === undefined || jackpotGodResult[col][row].coinType === CoinTypes.Jackpot) && data.hasGodInReels[col]) {
              var jackpot = jackpotGodResult[col][row];
              reelResultCoins.push({
                coinType: jackpot.coinType,
                valueType: jackpot.valueType
              });
            } else {
              reelResultCoins.push(currentResult);
            }
          }
          coinsResult[col] = reelResultCoins;
        }
        return coinsResult;
      }
      function getGodReelsResult(reelsResult, data) {
        var _reelSymbolPerGod;
        var result = structuredClone(reelsResult);
        var reelSymbolPerGod = (_reelSymbolPerGod = {}, _reelSymbolPerGod[GodFeatureTypes.Ares] = undefined, _reelSymbolPerGod[GodFeatureTypes.Athena] = undefined, _reelSymbolPerGod);
        var hasAnyGodInReels = data.hasGodInReels.some(function (item) {
          return item;
        });
        if (!hasAnyGodInReels) {
          return result;
        }
        var godTypePerColumn = gameData.godTypePerColumn;
        for (var col = 0; col < result.length; col++) {
          if (data.hasGodInReels[col]) {
            var currentColumn = result[col];
            var randomIndex = Math.floor(Math.random() * currentColumn.length);
            var selectedValue = {
              value: 0
            };
            var limiter = 0;
            do {
              var _reelSymbolPerGod$god;
              if (limiter > 10) {
                // To avoid infinite loop
                selectedValue = {
                  value: Math.floor(Math.random() * (specialSymbolTypeToId.wild - 1)) + 1
                };
                reelSymbolPerGod[godTypePerColumn[col]] = selectedValue;
                break;
              }
              selectedValue = (_reelSymbolPerGod$god = reelSymbolPerGod[godTypePerColumn[col]]) != null ? _reelSymbolPerGod$god : structuredClone(currentColumn[randomIndex]);
              reelSymbolPerGod[godTypePerColumn[col]] = selectedValue;
              limiter++;
            } while (selectedValue.value === specialSymbolTypeToId.wild || selectedValue.value === specialSymbolTypeToId.multiplier);
            var reel = [];
            for (var row = 0; row < currentColumn.length; row++) {
              reel.push(selectedValue);
            }
            result[col] = reel;
          }
        }
        return result;
      }
      var wildDrawTable = exports('wildDrawTable', {
        10: [{
          value: 0,
          weight: 125
        }, {
          value: 1,
          weight: 30
        }, {
          value: 2,
          weight: 15
        }, {
          value: 3,
          weight: 10
        }, {
          value: 4,
          weight: 3
        }, {
          value: 5,
          weight: 2
        }, {
          value: 6,
          weight: 1
        }],
        20: [{
          value: 0,
          weight: 115
        }, {
          value: 1,
          weight: 30
        }, {
          value: 2,
          weight: 15
        }, {
          value: 3,
          weight: 10
        }, {
          value: 4,
          weight: 3
        }, {
          value: 5,
          weight: 2
        }, {
          value: 6,
          weight: 1
        }],
        30: [{
          value: 0,
          weight: 110
        }, {
          value: 1,
          weight: 30
        }, {
          value: 2,
          weight: 15
        }, {
          value: 3,
          weight: 10
        }, {
          value: 4,
          weight: 3
        }, {
          value: 5,
          weight: 2
        }, {
          value: 6,
          weight: 1
        }],
        // default
        40: [{
          value: 0,
          weight: 100
        }, {
          value: 1,
          weight: 30
        }, {
          value: 2,
          weight: 15
        }, {
          value: 3,
          weight: 10
        }, {
          value: 4,
          weight: 3
        }, {
          value: 5,
          weight: 2
        }, {
          value: 6,
          weight: 1
        }],
        50: [{
          value: 0,
          weight: 85
        }, {
          value: 1,
          weight: 30
        }, {
          value: 2,
          weight: 15
        }, {
          value: 3,
          weight: 10
        }, {
          value: 4,
          weight: 3
        }, {
          value: 5,
          weight: 2
        }, {
          value: 6,
          weight: 1
        }],
        60: [{
          value: 0,
          weight: 75
        }, {
          value: 1,
          weight: 30
        }, {
          value: 2,
          weight: 15
        }, {
          value: 3,
          weight: 10
        }, {
          value: 4,
          weight: 3
        }, {
          value: 5,
          weight: 2
        }, {
          value: 6,
          weight: 1
        }],
        70: [{
          value: 0,
          weight: 70
        }, {
          value: 1,
          weight: 30
        }, {
          value: 2,
          weight: 15
        }, {
          value: 3,
          weight: 10
        }, {
          value: 4,
          weight: 3
        }, {
          value: 5,
          weight: 2
        }, {
          value: 6,
          weight: 1
        }],
        80: [{
          value: 0,
          weight: 65
        }, {
          value: 1,
          weight: 30
        }, {
          value: 2,
          weight: 15
        }, {
          value: 3,
          weight: 10
        }, {
          value: 4,
          weight: 3
        }, {
          value: 5,
          weight: 2
        }, {
          value: 6,
          weight: 1
        }],
        90: [{
          value: 0,
          weight: 50
        }, {
          value: 1,
          weight: 30
        }, {
          value: 2,
          weight: 15
        }, {
          value: 3,
          weight: 10
        }, {
          value: 4,
          weight: 3
        }, {
          value: 5,
          weight: 2
        }, {
          value: 6,
          weight: 1
        }],
        100: [{
          value: 0,
          weight: 50
        }, {
          value: 1,
          weight: 30
        }, {
          value: 2,
          weight: 15
        }, {
          value: 3,
          weight: 10
        }, {
          value: 4,
          weight: 3
        }, {
          value: 5,
          weight: 2
        }, {
          value: 6,
          weight: 1
        }]
      });
      var multiplierDrawTable = exports('multiplierDrawTable', {
        10: [{
          value: 0,
          weight: 60
        }, {
          value: 1,
          weight: 20
        }, {
          value: 2,
          weight: 5
        }, {
          value: 3,
          weight: 1
        }],
        20: [{
          value: 0,
          weight: 55
        }, {
          value: 1,
          weight: 20
        }, {
          value: 2,
          weight: 5
        }, {
          value: 3,
          weight: 1
        }],
        30: [{
          value: 0,
          weight: 65
        }, {
          value: 1,
          weight: 45
        }, {
          value: 2,
          weight: 5
        }, {
          value: 3,
          weight: 1
        }],
        // default
        40: [{
          value: 0,
          weight: 45
        }, {
          value: 1,
          weight: 20
        }, {
          value: 2,
          weight: 5
        }, {
          value: 3,
          weight: 1
        }],
        50: [{
          value: 0,
          weight: 40
        }, {
          value: 1,
          weight: 20
        }, {
          value: 2,
          weight: 5
        }, {
          value: 3,
          weight: 1
        }],
        60: [{
          value: 0,
          weight: 35
        }, {
          value: 1,
          weight: 20
        }, {
          value: 2,
          weight: 5
        }, {
          value: 3,
          weight: 1
        }],
        70: [{
          value: 0,
          weight: 30
        }, {
          value: 1,
          weight: 20
        }, {
          value: 2,
          weight: 5
        }, {
          value: 3,
          weight: 1
        }],
        80: [{
          value: 0,
          weight: 25
        }, {
          value: 1,
          weight: 20
        }, {
          value: 2,
          weight: 5
        }, {
          value: 3,
          weight: 1
        }],
        90: [{
          value: 0,
          weight: 20
        }, {
          value: 1,
          weight: 20
        }, {
          value: 2,
          weight: 5
        }, {
          value: 3,
          weight: 1
        }],
        100: [{
          value: 0,
          weight: 20
        }, {
          value: 1,
          weight: 20
        }, {
          value: 2,
          weight: 5
        }, {
          value: 3,
          weight: 1
        }]
      });
      var godFeatureDuringFreeSpinsTable = exports('godFeatureDuringFreeSpinsTable', (_godFeatureDuringFree = {}, _godFeatureDuringFree[GodFeatureTypes.Ares] = {
        createWeightedTable: function createWeightedTable$1(pillarCount) {
          var rounded = groupOfTen(pillarCount);
          return createWeightedTable(wildDrawTable[rounded]);
        }
      }, _godFeatureDuringFree[GodFeatureTypes.Athena] = {
        createWeightedTable: function createWeightedTable$1(pillarCount) {
          var rounded = groupOfTen(pillarCount);
          return createWeightedTable(multiplierDrawTable[rounded]);
        }
      }, _godFeatureDuringFree));
      function groupOfTen(count) {
        return Math.floor(count / 10) * 10;
      }
      function getGodFeatureTypeSymbolsAmount(godType, pillarCount) {
        var table = godFeatureDuringFreeSpinsTable[godType].createWeightedTable(pillarCount);
        var randomIndex = Math.floor(Math.random() * table.length);
        return table[randomIndex];
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/gameplayModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './eventSignals.ts', './playfieldUpdate.ts', './godFeatureTypes.ts', './gameData.ts', './hudComponent.ts', './hudModel.ts', './roundTypes.ts', './gameClasses.ts', './specialSymbols.ts', './godFeatureModel.ts', './godFeatureComponent.ts', './jackpotComponent.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, CCBoolean, CCFloat, Label, randomRangeInt, Component, setRoundTypeSignal, freeSpinsActivateSignal, godFeatureResetSignal, changeReelSpinDirectionSignal, godFeatureSignal, bonusResetRollsSignal, playfieldUpdate, GodFeatureTypes, gameData, HudComponent, HudModel, RoundTypes, JackpotCoins, GodCoins, RoundPlayfield, SpecialSymbolTypes, specialSymbolTypeToGodType, GodFeatureModel, GodFeatureComponent, JackpotComponent;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCBoolean = module.CCBoolean;
      CCFloat = module.CCFloat;
      Label = module.Label;
      randomRangeInt = module.randomRangeInt;
      Component = module.Component;
    }, function (module) {
      setRoundTypeSignal = module.setRoundTypeSignal;
      freeSpinsActivateSignal = module.freeSpinsActivateSignal;
      godFeatureResetSignal = module.godFeatureResetSignal;
      changeReelSpinDirectionSignal = module.changeReelSpinDirectionSignal;
      godFeatureSignal = module.godFeatureSignal;
      bonusResetRollsSignal = module.bonusResetRollsSignal;
    }, function (module) {
      playfieldUpdate = module.playfieldUpdate;
    }, function (module) {
      GodFeatureTypes = module.GodFeatureTypes;
    }, function (module) {
      gameData = module.gameData;
    }, function (module) {
      HudComponent = module.HudComponent;
    }, function (module) {
      HudModel = module.HudModel;
    }, function (module) {
      RoundTypes = module.RoundTypes;
    }, function (module) {
      JackpotCoins = module.JackpotCoins;
      GodCoins = module.GodCoins;
      RoundPlayfield = module.RoundPlayfield;
    }, function (module) {
      SpecialSymbolTypes = module.SpecialSymbolTypes;
      specialSymbolTypeToGodType = module.specialSymbolTypeToGodType;
    }, function (module) {
      GodFeatureModel = module.GodFeatureModel;
    }, function (module) {
      GodFeatureComponent = module.GodFeatureComponent;
    }, function (module) {
      JackpotComponent = module.JackpotComponent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "3a7c15rI05KTZ1Npv1COlVJ", "gameplayModel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameplayModel = exports('GameplayModel', (_dec = ccclass('GameplayModel'), _dec2 = property(GodFeatureComponent), _dec3 = property(JackpotComponent), _dec4 = property({
        type: [JackpotCoins]
      }), _dec5 = property({
        type: [GodCoins]
      }), _dec6 = property([RoundPlayfield]), _dec7 = property(CCBoolean), _dec8 = property(CCBoolean), _dec9 = property(CCBoolean), _dec10 = property([CCFloat]), _dec11 = property(CCFloat), _dec12 = property(CCFloat), _dec13 = property(Label), _dec14 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameplayModel, _Component);
        function GameplayModel() {
          var _this$activatedSpecia, _this$normalizedBonus, _this$setFieldsActive;
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.hudComponent = null;
          _this.hudModel = null;
          _initializerDefineProperty(_this, "godFeatureComponent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jackpotComponents", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jackpotCoins", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "godCoins", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playfields", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "canStartRound", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bonusStarted", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "reverse", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stakes", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startBalance", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startStake", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeSpinCountLabel", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeSpinTotalLabel", _descriptor13, _assertThisInitialized(_this));
          _this.respinEnabled = false;
          _this.respinResolvePromise = [];
          _this.godFeatureModels = [];
          _this.activatedSpecialFreeSpins = (_this$activatedSpecia = {}, _this$activatedSpecia[SpecialSymbolTypes.Wild] = false, _this$activatedSpecia[SpecialSymbolTypes.Multiplier] = false, _this$activatedSpecia);
          _this.specialsFeatureActivated = false;
          _this.roundType = RoundTypes.Normal;
          _this.previousRoundType = RoundTypes.Normal;
          _this.normalizedBonusFeatureValues = (_this$normalizedBonus = {}, _this$normalizedBonus[GodFeatureTypes.Ares] = 0, _this$normalizedBonus[GodFeatureTypes.Athena] = 0, _this$normalizedBonus);
          _this.showingCoins = false;
          _this.setRoundTypeBind = _this.setRoundTypeHandler.bind(_assertThisInitialized(_this));
          _this.freeSpinsActivateBind = _this.freeSpinsActivateHandler.bind(_assertThisInitialized(_this));
          _this.godFeatureResetBind = _this.godFeatureResetHandler.bind(_assertThisInitialized(_this));
          _this.setFieldsActive = (_this$setFieldsActive = {}, _this$setFieldsActive[RoundTypes.Normal] = function () {
            _this.setFieldActive(RoundTypes.Normal);
          }, _this$setFieldsActive[RoundTypes.Bonus] = function () {
            _this.setFieldActive(RoundTypes.Bonus);
          }, _this$setFieldsActive[RoundTypes.FreeSpin] = function () {
            _this.setFieldActive(RoundTypes.Normal);
          }, _this$setFieldsActive);
          return _this;
        }
        var _proto = GameplayModel.prototype;
        _proto.getJackpotValueByType = function getJackpotValueByType(type) {
          var _this$jackpotComponen, _this$jackpotComponen2;
          return (_this$jackpotComponen = (_this$jackpotComponen2 = this.jackpotComponents.find(function (j) {
            return j.jackpotType === type;
          })) == null || (_this$jackpotComponen2 = _this$jackpotComponen2.jackpotModel) == null ? void 0 : _this$jackpotComponen2.jackpotValue) != null ? _this$jackpotComponen : 0;
        };
        _proto.onLoad = function onLoad() {
          setRoundTypeSignal.addListener(this.setRoundTypeBind);
          freeSpinsActivateSignal.addListener(this.freeSpinsActivateBind);
          godFeatureResetSignal.addListener(this.godFeatureResetBind);
        };
        _proto.onDestroy = function onDestroy() {
          setRoundTypeSignal.removeListener(this.setRoundTypeBind);
          freeSpinsActivateSignal.removeListener(this.freeSpinsActivateBind);
          godFeatureResetSignal.removeListener(this.godFeatureResetBind);
        };
        _proto.start = function start() {
          this.hudComponent = this.node.scene.getComponentInChildren(HudComponent);
          this.hudModel = this.hudComponent.getComponent(HudModel);
          this.godFeatureModels = this.godFeatureComponent.map(function (component) {
            return component.getComponent(GodFeatureModel);
          });
          this.hudModel.balance = this.startBalance;
          var stakeValues = this.stakes.map(function (s) {
            return '€' + (s * 0.01).toFixed(2);
          });
          this.hudComponent.stakeMenu.populateMenu(stakeValues, '€' + (this.startStake * 0.01).toFixed(2));
          setRoundTypeSignal.dispatch({
            roundType: RoundTypes.Normal
          });
        };
        _proto.startRound = /*#__PURE__*/function () {
          var _startRound = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(playfieldModel, bonusModel) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(this.roundType === RoundTypes.FreeSpin)) {
                    _context.next = 4;
                    break;
                  }
                  this.playFreeSpin();
                  _context.next = 10;
                  break;
                case 4:
                  if (this.hudModel.hasSufficientBalance) {
                    _context.next = 7;
                    break;
                  }
                  window.alert('Balance too low! Please, change stake.');
                  return _context.abrupt("return");
                case 7:
                  if (this.canStartRound) {
                    _context.next = 10;
                    break;
                  }
                  console.warn('Cannot start round');
                  return _context.abrupt("return");
                case 10:
                  if (this.hudModel.isAutoplayEnabled) {
                    this.hudModel.isAutoplayStarted = true;
                  }
                  this.canStartRound = false;
                  console.log('start round');
                  _context.next = 15;
                  return playfieldUpdate(this.reverse, {
                    playfield: playfieldModel,
                    bonus: bonusModel,
                    hud: this.hudModel,
                    gameplay: this
                  });
                case 15:
                  console.log('end round');
                  this.canStartRound = true;
                  if (this.hudModel.isAutoplayStarted && this.roundType === RoundTypes.Normal) {
                    this.startRound(playfieldModel, bonusModel);
                  }
                case 18:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function startRound(_x, _x2) {
            return _startRound.apply(this, arguments);
          }
          return startRound;
        }();
        _proto.playFreeSpin = function playFreeSpin() {
          this.freeSpinCount++;
        };
        _proto.resetFreeSpins = function resetFreeSpins(roundType) {
          this.freeSpinCount = 0;
          this.freeSpinLeft = gameData.gods.freeSpinCount;
          if (roundType === RoundTypes.Normal) {
            var _this$activatedSpecia2;
            this.activatedSpecialFreeSpins = (_this$activatedSpecia2 = {}, _this$activatedSpecia2[SpecialSymbolTypes.Wild] = false, _this$activatedSpecia2[SpecialSymbolTypes.Multiplier] = false, _this$activatedSpecia2);
          }
        };
        _proto.changeReelSpinDirection = function changeReelSpinDirection() {
          this.reverse = !this.reverse;
          changeReelSpinDirectionSignal.dispatch({
            reverse: this.reverse
          });
        };
        _proto.bonusFeatureTrigger = function bonusFeatureTrigger(bonusType) {
          var increase = randomRangeInt(3, 7);
          this.normalizedBonusFeatureValues[bonusType] = Math.min(this.normalizedBonusFeatureValues[bonusType] + increase / gameData.gods.maxPillarValue, 1);
          godFeatureSignal.dispatch({
            feature: bonusType,
            addAmount: increase
          });
        };
        _proto.setFieldActive = function setFieldActive(type) {
          this.playfields.forEach(function (field) {
            field.target.active = field.type === type;
          });
        };
        _proto.setRoundTypeHandler = function setRoundTypeHandler(args) {
          this.previousRoundType = this.roundType;
          this.roundType = args.roundType;
          this.setFieldsActive[this.roundType]();
          bonusResetRollsSignal.dispatch();
          if (args.roundType !== RoundTypes.FreeSpin) {
            this.resetFreeSpins(args.roundType);
          }
        };
        _proto.freeSpinsActivateHandler = function freeSpinsActivateHandler(args) {
          this.activatedSpecialFreeSpins[args.specialType] = true;
        };
        _proto.godFeatureResetHandler = function godFeatureResetHandler() {
          this.specialsFeatureActivated = false;
        };
        _proto.getCurrentPillarCounts = function getCurrentPillarCounts() {
          var _this$godFeatureCompo;
          return this.godFeatureComponent.reduce(function (acc, c) {
            acc[c.featureType] = c.countValue >= gameData.gods.startPillarCount ? c.countValue : gameData.gods.startPillarCount;
            return acc;
          }, (_this$godFeatureCompo = {}, _this$godFeatureCompo[GodFeatureTypes.Ares] = 0, _this$godFeatureCompo[GodFeatureTypes.Athena] = 0, _this$godFeatureCompo));
        };
        _createClass(GameplayModel, [{
          key: "freeSpinCount",
          get: function get() {
            return parseInt(this.freeSpinCountLabel.string);
          },
          set: function set(value) {
            this.freeSpinCountLabel.string = value.toString();
          }
        }, {
          key: "freeSpinLeft",
          get: function get() {
            return parseInt(this.freeSpinTotalLabel.string);
          },
          set: function set(value) {
            this.freeSpinTotalLabel.string = value.toString();
          }
        }, {
          key: "isFreeSpinsCompleted",
          get: function get() {
            return this.freeSpinCount === this.freeSpinLeft;
          }
        }, {
          key: "hasAnySpecialActivated",
          get: function get() {
            return Object.values(this.activatedSpecialFreeSpins).some(function (v) {
              return v;
            });
          }
        }, {
          key: "activatedGodsList",
          get: function get() {
            return Object.entries(this.activatedSpecialFreeSpins).filter(function (_ref) {
              var _ = _ref[0],
                value = _ref[1];
              return value;
            }).map(function (_ref2) {
              var key = _ref2[0];
              return specialSymbolTypeToGodType[key];
            });
          }
        }, {
          key: "activatedSpecialsList",
          get: function get() {
            return Object.entries(this.activatedSpecialFreeSpins).filter(function (_ref3) {
              var _ = _ref3[0],
                value = _ref3[1];
              return value;
            }).map(function (_ref4) {
              var key = _ref4[0];
              return key;
            });
          }
        }, {
          key: "remainingWildsCount",
          get: function get() {
            var _this$godFeatureModel, _this$godFeatureModel2;
            return (_this$godFeatureModel = (_this$godFeatureModel2 = this.godFeatureModels.find(function (g) {
              return g.featureType === GodFeatureTypes.Ares;
            })) == null ? void 0 : _this$godFeatureModel2.potCount) != null ? _this$godFeatureModel : 0;
          }
        }, {
          key: "remainingMultiplierCount",
          get: function get() {
            var _this$godFeatureModel3, _this$godFeatureModel4;
            return (_this$godFeatureModel3 = (_this$godFeatureModel4 = this.godFeatureModels.find(function (g) {
              return g.featureType === GodFeatureTypes.Athena;
            })) == null ? void 0 : _this$godFeatureModel4.potCount) != null ? _this$godFeatureModel3 : 0;
          }
        }, {
          key: "activatedSpecialCount",
          get: function get() {
            var _ref5;
            return _ref5 = {}, _ref5[SpecialSymbolTypes.Wild] = this.activatedSpecialFreeSpins[SpecialSymbolTypes.Wild] ? this.remainingWildsCount : 0, _ref5[SpecialSymbolTypes.Multiplier] = this.activatedSpecialFreeSpins[SpecialSymbolTypes.Multiplier] ? this.remainingMultiplierCount : 0, _ref5;
          }
        }]);
        return GameplayModel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "godFeatureComponent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "jackpotComponents", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "jackpotCoins", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "godCoins", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "playfields", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "canStartRound", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bonusStarted", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "reverse", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "stakes", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "startBalance", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10000;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "startStake", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "freeSpinCountLabel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "freeSpinTotalLabel", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/godFeatureComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './eventSignals.ts', './godFeatureTypes.ts', './gameData.ts', './godFeatureModel.ts', './gameplayCalculations.ts', './specialSymbols.ts', './hudModel.ts', './featureStatus.ts', './wait.ts', './roundTypes.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, ParticleSystem2D, Label, Enum, Color, tween, Vec3, Sprite, Component, startRoundSignal, setRoundTypeSignal, godFeatureResetSignal, godFeatureSignal, bonusBuyTestSignal, freeSpinsActivateSignal, GodFeatureTypes, gameData, GodFeatureModel, drawChanceOfGodFeatureTrigger, godTypeToSpecialSymbolType, HudModel, FeatureStatus, wait, RoundTypes;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      ParticleSystem2D = module.ParticleSystem2D;
      Label = module.Label;
      Enum = module.Enum;
      Color = module.Color;
      tween = module.tween;
      Vec3 = module.Vec3;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      startRoundSignal = module.startRoundSignal;
      setRoundTypeSignal = module.setRoundTypeSignal;
      godFeatureResetSignal = module.godFeatureResetSignal;
      godFeatureSignal = module.godFeatureSignal;
      bonusBuyTestSignal = module.bonusBuyTestSignal;
      freeSpinsActivateSignal = module.freeSpinsActivateSignal;
    }, function (module) {
      GodFeatureTypes = module.GodFeatureTypes;
    }, function (module) {
      gameData = module.gameData;
    }, function (module) {
      GodFeatureModel = module.GodFeatureModel;
    }, function (module) {
      drawChanceOfGodFeatureTrigger = module.drawChanceOfGodFeatureTrigger;
    }, function (module) {
      godTypeToSpecialSymbolType = module.godTypeToSpecialSymbolType;
    }, function (module) {
      HudModel = module.HudModel;
    }, function (module) {
      FeatureStatus = module.FeatureStatus;
    }, function (module) {
      wait = module.wait;
    }, function (module) {
      RoundTypes = module.RoundTypes;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "8c755u0wCNA1qRD7awVP9ec", "godFeatureComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GodFeatureComponent = exports('GodFeatureComponent', (_dec = ccclass('GodFeatureComponent'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(ParticleSystem2D), _dec6 = property(Label), _dec7 = property({
        type: Enum(GodFeatureTypes),
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GodFeatureComponent, _Component);
        function GodFeatureComponent() {
          var _this$colorPerStatus;
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.godFeatureModel = null;
          _this.hudModel = null;
          _initializerDefineProperty(_this, "coinsNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "potNode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pillarNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coinParticleSystem", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "countValueLbl", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "featureType", _descriptor6, _assertThisInitialized(_this));
          _this.coinsAnimOffset = 0.6;
          _this.canTriggerPillar = false;
          _this.startRoundBind = _this.startRoundHandler.bind(_assertThisInitialized(_this));
          _this.setRoundTypeBind = _this.setRoundTypeHandler.bind(_assertThisInitialized(_this));
          _this.godFeatureResetBind = _this.godFeatureResetHandler.bind(_assertThisInitialized(_this));
          _this.godFeatureHandlerBind = _this.godFeatureHandler.bind(_assertThisInitialized(_this));
          _this.bonusBuyTestHandlerBind = _this.bonusBuyTestHandler.bind(_assertThisInitialized(_this));
          _this.freeSpinsActivateHandlerBind = _this.freeSpinsActivateHandler.bind(_assertThisInitialized(_this));
          _this.colorPerStatus = (_this$colorPerStatus = {}, _this$colorPerStatus[FeatureStatus.Normal] = function () {
            _this.setSpriteColor(_this.potNode, Color.WHITE);
            _this.setSpriteColor(_this.coinsNode, Color.WHITE);
            _this.setSpriteColor(_this.pillarNode, Color.WHITE);
          }, _this$colorPerStatus[FeatureStatus.Activated] = function () {
            _this.setSpriteColor(_this.potNode, new Color("#FFFF91FF"));
            _this.setSpriteColor(_this.coinsNode, new Color("#FFFF91FF"));
            _this.setSpriteColor(_this.pillarNode, new Color("#FFFF91FF"));
          }, _this$colorPerStatus[FeatureStatus.Disabled] = function () {
            _this.setSpriteColor(_this.potNode, new Color("#A7A7A7CC"));
            _this.setSpriteColor(_this.coinsNode, new Color("#A7A7A7CC"));
            _this.setSpriteColor(_this.pillarNode, new Color("#A7A7A7CC"));
          }, _this$colorPerStatus);
          return _this;
        }
        var _proto = GodFeatureComponent.prototype;
        _proto.onLoad = function onLoad() {
          startRoundSignal.addListener(this.startRoundBind);
          setRoundTypeSignal.addListener(this.setRoundTypeBind);
          godFeatureResetSignal.addListener(this.godFeatureResetBind);
          godFeatureSignal.addListener(this.godFeatureHandlerBind);
          bonusBuyTestSignal.addListener(this.bonusBuyTestHandlerBind);
          freeSpinsActivateSignal.addListener(this.freeSpinsActivateHandlerBind);
          this.godFeatureModel = this.node.addComponent(GodFeatureModel);
          this.godFeatureModel.featureType = this.featureType;
          this.godFeatureModel.maxAmount = gameData.gods.maxPillarValue;
          this.godFeatureModel.avarageTriggerCount = gameData.gods.averageTriggerCount;
        };
        _proto.onDestroy = function onDestroy() {
          startRoundSignal.removeListener(this.startRoundBind);
          setRoundTypeSignal.removeListener(this.setRoundTypeBind);
          godFeatureResetSignal.removeListener(this.godFeatureResetBind);
          godFeatureSignal.removeListener(this.godFeatureHandlerBind);
          bonusBuyTestSignal.removeListener(this.bonusBuyTestHandlerBind);
          freeSpinsActivateSignal.removeListener(this.freeSpinsActivateHandlerBind);
        };
        _proto.start = function start() {
          this.hudModel = this.node.scene.getComponentInChildren(HudModel);
          this.reset();
        };
        _proto.startRoundHandler = function startRoundHandler() {
          // Draw trigger chance at start of round and wait for a coin to complete the trigger
          if (!this.canTriggerPillar) {
            this.canTriggerPillar = drawChanceOfGodFeatureTrigger();
          }
        };
        _proto.setRoundTypeHandler = function setRoundTypeHandler(data) {
          if (data.roundType !== RoundTypes.FreeSpin) {
            this.activatePot(FeatureStatus.Normal);
          }
        };
        _proto.bonusBuyTestHandler = function bonusBuyTestHandler() {
          // --- For Testing Purposes ---
          var testAmount = 15;
          this.countValue += testAmount;
          if (this.countValue >= this.godFeatureModel.maxAmount) {
            this.countValue = this.godFeatureModel.maxAmount;
          }
          var addAmountPercentage = testAmount / this.godFeatureModel.maxAmount;
          this.godFeatureModel.amountPercentage = Math.min(this.godFeatureModel.amountPercentage + addAmountPercentage, 1);
          if (this.countValue > this.godFeatureModel.maxAmount) {
            this.countValue = this.godFeatureModel.maxAmount;
          }
          this.growPots();
          // --- For Testing Purposes ---
        };

        _proto.godFeatureHandler = function godFeatureHandler(args) {
          var _this2 = this;
          if (args.feature !== this.featureType) {
            return;
          }

          //Xavier's implementation
          this.countValue += args.addAmount;
          if (this.countValue > this.godFeatureModel.maxAmount) {
            this.countValue = this.godFeatureModel.maxAmount;
          }
          var addAmountPercentage = args.addAmount / this.godFeatureModel.maxAmount;
          this.godFeatureModel.amountPercentage = Math.min(this.godFeatureModel.amountPercentage + addAmountPercentage, 1);
          if (this.countValue >= this.godFeatureModel.avarageTriggerCount && !args.bonusBuy) {
            if (this.canTriggerPillar || this.hudModel.isPillarCheat) {
              this.godFeatureModel.status = FeatureStatus.Activated;
              wait(100).then(function () {
                freeSpinsActivateSignal.dispatch({
                  specialType: godTypeToSpecialSymbolType[_this2.featureType],
                  amount: _this2.countValue
                });
                _this2.canTriggerPillar = false;
              });
            }
          }
          this.growPots();
        };
        _proto.growPots = function growPots() {
          var transform = gameData.gods.transforms[this.featureType];
          var potProgress = Math.min(this.godFeatureModel.amountPercentage / this.coinsAnimOffset, 1);
          var potEndPos = transform.pot.begin + (transform.pot.end - transform.pot.begin) * potProgress;
          tween(this.potNode).to(0.25, {
            position: new Vec3(this.potNode.position.x, potEndPos, 0)
          }, {
            easing: 'quintOut'
          }).start();
          var coinProgress = Math.max(this.godFeatureModel.amountPercentage - this.coinsAnimOffset, 0);
          var coinEndPos = transform.coins.begin + (transform.coins.end - transform.coins.begin) * (coinProgress / (1 - this.coinsAnimOffset));
          tween(this.coinsNode).to(0.25, {
            position: new Vec3(this.coinsNode.position.x, coinEndPos, 0)
          }, {
            easing: 'quintOut'
          }).start();
        };
        _proto.godFeatureResetHandler = function godFeatureResetHandler(args) {
          if (args.feature !== this.featureType) {
            return;
          }
          this.reset();
        };
        _proto.freeSpinsActivateHandler = function freeSpinsActivateHandler(args) {
          if (args.specialType !== godTypeToSpecialSymbolType[this.featureType]) {
            if (this.godFeatureModel.status !== FeatureStatus.Activated) {
              this.godFeatureModel.status = FeatureStatus.Disabled;
              this.activatePot(FeatureStatus.Disabled);
            }
            return;
          }
          this.activatePot(FeatureStatus.Activated);
        };
        _proto.activatePot = function activatePot(colorStatus) {
          var _this$colorPerStatus$, _this$colorPerStatus2;
          (_this$colorPerStatus$ = (_this$colorPerStatus2 = this.colorPerStatus)[colorStatus]) == null || _this$colorPerStatus$.call(_this$colorPerStatus2);
          if (colorStatus === FeatureStatus.Activated) {
            this.coinParticleSystem.resetSystem();
          } else {
            this.coinParticleSystem.stopSystem();
          }
        };
        _proto.setSpriteColor = function setSpriteColor(node, color) {
          var sprite = node.getComponent(Sprite);
          sprite.color = color;
        };
        _proto.reset = function reset() {
          var transform = gameData.gods.transforms[this.featureType];
          this.potNode.position.set(this.potNode.position.x, transform.pot.begin);
          this.coinsNode.position.set(this.coinsNode.position.x, transform.coins.hidden);
          this.godFeatureModel.amountPercentage = gameData.gods.startPillarCount / this.godFeatureModel.maxAmount;
          this.countValue = gameData.gods.startPillarCount;
          this.godFeatureModel.status = FeatureStatus.Normal;
          this.activatePot(FeatureStatus.Normal);
          this.growPots();
        };
        _createClass(GodFeatureComponent, [{
          key: "countValue",
          get: function get() {
            return this.godFeatureModel.potCount;
          },
          set: function set(value) {
            this.godFeatureModel.potCount = value;
            this.countValueLbl.string = value.toFixed(0);
          }
        }]);
        return GodFeatureComponent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coinsNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "potNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pillarNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "coinParticleSystem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return undefined;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "countValueLbl", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "featureType", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return undefined;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/godFeatureDrop.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './eventSignals.ts', './specialSymbols.ts', './gameClasses.ts', './reelsData.ts', './playfieldModel.ts', './wait.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, CCBoolean, Component, instantiate, freeSpinsActivateAnimationSignal, specialSymbolTypeToGodType, GodCoins, reelsData, PlayfieldModel, wait;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      CCBoolean = module.CCBoolean;
      Component = module.Component;
      instantiate = module.instantiate;
    }, function (module) {
      freeSpinsActivateAnimationSignal = module.freeSpinsActivateAnimationSignal;
    }, function (module) {
      specialSymbolTypeToGodType = module.specialSymbolTypeToGodType;
    }, function (module) {
      GodCoins = module.GodCoins;
    }, function (module) {
      reelsData = module.reelsData;
    }, function (module) {
      PlayfieldModel = module.PlayfieldModel;
    }, function (module) {
      wait = module.wait;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b3fb7teR+9DDLIu+unlhI6z", "godFeatureDrop", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GodFeatureDrop = exports('GodFeatureDrop', (_dec = ccclass('GodFeatureDrop'), _dec2 = property([GodCoins]), _dec3 = property([Node]), _dec4 = property(CCBoolean), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GodFeatureDrop, _Component);
        function GodFeatureDrop() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.playfieldModel = null;
          _initializerDefineProperty(_this, "featureSymbolPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "featureDropPositions", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "reverse", _descriptor3, _assertThisInitialized(_this));
          _this.featureSymbols = [];
          _this.canMove = false;
          _this.timer = 0.0;
          _this.timerMax = 1.0;
          _this.freeSpinsActivateAnimationBind = _this.freeSpinsActivateAnimationHandler.bind(_assertThisInitialized(_this));
          return _this;
        }
        var _proto = GodFeatureDrop.prototype;
        _proto.onLoad = function onLoad() {
          freeSpinsActivateAnimationSignal.addListener(this.freeSpinsActivateAnimationBind);
        };
        _proto.onDestroy = function onDestroy() {
          freeSpinsActivateAnimationSignal.removeListener(this.freeSpinsActivateAnimationBind);
        };
        _proto.start = function start() {
          this.playfieldModel = this.node.scene.getComponentInChildren(PlayfieldModel);
        };
        _proto.update = function update(deltaT) {
          if (this.canMove) {
            this.timer += deltaT;
            if (this.timer >= this.timerMax) {
              var _this$playfieldModel$;
              this.reset();
              (_this$playfieldModel$ = this.playfieldModel.waitingStopPromise) == null || _this$playfieldModel$.resolve();
            }
            var ySpeed = reelsData.rollSpeed.normal.y * deltaT;
            for (var i = 0; i < this.featureSymbols.length; i++) {
              this.featureSymbols[i].y += this.reverse ? ySpeed : -ySpeed;
            }
          }
        };
        _proto.freeSpinsActivateAnimationHandler = function freeSpinsActivateAnimationHandler(args) {
          var symbolCount = Object.values(args.activatedSpecialCount).reduce(function (a, b) {
            return a + b;
          }, 0);
          var rowCount = symbolCount / this.featureDropPositions.length;
          this.timerMax = rowCount * 0.2;
          void this.spawnSymbolsToDrop(args.activatedSpecialCount);
        };
        _proto.spawnSymbolsToDrop = /*#__PURE__*/function () {
          var _spawnSymbolsToDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(specialsAmount) {
            var _this2 = this;
            var yOffset, symbolCount, keys, _loop, i;
            return _regeneratorRuntime().wrap(function _callee$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  yOffset = 0;
                  symbolCount = 0;
                  keys = Object.keys(specialsAmount).map(function (key) {
                    return key;
                  });
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var _this2$featureSymbolP;
                    var specialType, prefab, count, j, index, yMultiplier, parent, symbol;
                    return _regeneratorRuntime().wrap(function _loop$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          specialType = keys[i];
                          prefab = (_this2$featureSymbolP = _this2.featureSymbolPrefab.find(function (data) {
                            return data.type === specialSymbolTypeToGodType[specialType];
                          })) == null ? void 0 : _this2$featureSymbolP.prefab;
                          if (prefab) {
                            _context.next = 5;
                            break;
                          }
                          console.warn("No prefab found for special type: " + specialType);
                          return _context.abrupt("return", 1);
                        case 5:
                          count = specialsAmount[keys[i]];
                          j = 0;
                        case 7:
                          if (!(j < count)) {
                            _context.next = 22;
                            break;
                          }
                          index = symbolCount % _this2.featureDropPositions.length;
                          yMultiplier = Math.floor(symbolCount / _this2.featureDropPositions.length);
                          parent = _this2.featureDropPositions[index];
                          symbol = instantiate(prefab);
                          symbol.setParent(parent);
                          yOffset = reelsData.transform[index].h * yMultiplier;
                          symbol.setPosition(0, yOffset, 0);
                          _this2.featureSymbols.push(symbol);
                          _context.next = 18;
                          return wait(10);
                        case 18:
                          symbolCount++;
                        case 19:
                          j++;
                          _context.next = 7;
                          break;
                        case 22:
                        case "end":
                          return _context.stop();
                      }
                    }, _loop);
                  });
                  i = 0;
                case 5:
                  if (!(i < keys.length)) {
                    _context2.next = 12;
                    break;
                  }
                  return _context2.delegateYield(_loop(), "t0", 7);
                case 7:
                  if (!_context2.t0) {
                    _context2.next = 9;
                    break;
                  }
                  return _context2.abrupt("continue", 9);
                case 9:
                  i++;
                  _context2.next = 5;
                  break;
                case 12:
                  _context2.next = 14;
                  return wait(800);
                case 14:
                  this.canMove = true;
                case 15:
                case "end":
                  return _context2.stop();
              }
            }, _callee, this);
          }));
          function spawnSymbolsToDrop(_x) {
            return _spawnSymbolsToDrop.apply(this, arguments);
          }
          return spawnSymbolsToDrop;
        }();
        _proto.reset = function reset() {
          this.disposeSymbols();
          this.canMove = false;
          this.timer = 0.0;
        };
        _proto.disposeSymbols = function disposeSymbols() {
          this.featureSymbols.forEach(function (symbol) {
            symbol.destroy();
          });
          this.featureSymbols = [];
        };
        return GodFeatureDrop;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "featureSymbolPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "featureDropPositions", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "reverse", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/godFeatureModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './featureStatus.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, Component, FeatureStatus;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
    }, function (module) {
      FeatureStatus = module.FeatureStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1c715wqnMhH5YhVG37XfDp9", "godFeatureModel", undefined);
      var GodFeatureModel = exports('GodFeatureModel', /*#__PURE__*/function (_Component) {
        _inheritsLoose(GodFeatureModel, _Component);
        function GodFeatureModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.featureType = void 0;
          _this.amountPercentage = 0;
          _this.maxAmount = 1;
          _this.avarageTriggerCount = 1;
          _this.potCount = 0;
          _this.status = FeatureStatus.Normal;
          return _this;
        }
        _createClass(GodFeatureModel, [{
          key: "amount",
          get: function get() {
            return this.amountPercentage * this.maxAmount;
          }
        }]);
        return GodFeatureModel;
      }(Component));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/godFeatureTypes.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      var _godFeatureTypeToId;
      cclegacy._RF.push({}, "070caJ+dBRAh7/IQ/gSPxUi", "godFeatureTypes", undefined);
      var GodFeatureTypes = exports('GodFeatureTypes', /*#__PURE__*/function (GodFeatureTypes) {
        GodFeatureTypes["Athena"] = "athena";
        GodFeatureTypes["Ares"] = "ares";
        return GodFeatureTypes;
      }({}));
      var godFeatureTypeToId = exports('godFeatureTypeToId', (_godFeatureTypeToId = {}, _godFeatureTypeToId[GodFeatureTypes.Athena] = 10, _godFeatureTypeToId[GodFeatureTypes.Ares] = 11, _godFeatureTypeToId));
      var idToGodFeatureType = exports('idToGodFeatureType', {
        10: GodFeatureTypes.Athena,
        11: GodFeatureTypes.Ares
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/godSymbolCompont.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './eventSignals.ts', './gameplayModel.ts', './resolvablePromise.ts', './gameData.ts', './godFeatureTypes.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Animation, CCInteger, UITransform, Vec3, tween, Component, respinGodsSignal, GameplayModel, ResolvablePromise, gameData, GodFeatureTypes;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      CCInteger = module.CCInteger;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      respinGodsSignal = module.respinGodsSignal;
    }, function (module) {
      GameplayModel = module.GameplayModel;
    }, function (module) {
      ResolvablePromise = module.ResolvablePromise;
    }, function (module) {
      gameData = module.gameData;
    }, function (module) {
      GodFeatureTypes = module.GodFeatureTypes;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "ba966I4VHdFDaV9jAP3BpJL", "godSymbolCompont", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent;
      var GodSymbolComponent = exports('GodSymbolComponent', (_dec = ccclass('GodSymbolComponent'), _dec2 = requireComponent(Animation), _dec3 = property(CCInteger), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GodSymbolComponent, _Component);
        function GodSymbolComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.gameplayModel = null;
          _initializerDefineProperty(_this, "columnId", _descriptor, _assertThisInitialized(_this));
          _this.startPosition = void 0;
          _this.startScale = void 0;
          _this.respinGodsBind = _this.respinGodsHandler.bind(_assertThisInitialized(_this));
          return _this;
        }
        var _proto = GodSymbolComponent.prototype;
        _proto.onLoad = function onLoad() {
          this.startPosition = structuredClone(this.node.position);
          this.startScale = structuredClone(this.node.scale);
          respinGodsSignal.addListener(this.respinGodsBind);
        };
        _proto.onDestroy = function onDestroy() {
          respinGodsSignal.removeListener(this.respinGodsBind);
        };
        _proto.start = function start() {
          this.gameplayModel = this.node.scene.getComponentInChildren(GameplayModel);
        };
        _proto.respinGodsHandler = function respinGodsHandler(args) {
          var _this$gameplayModel$r,
            _this2 = this;
          if (!args.columnIds.includes(this.columnId)) {
            return;
          }
          var resolvePromise = new ResolvablePromise();
          (_this$gameplayModel$r = this.gameplayModel.respinResolvePromise) == null || _this$gameplayModel$r.push(resolvePromise);
          var contentSize = this.node.getComponent(UITransform).contentSize;
          var endX = this.startPosition.x;
          var endY = this.startPosition.y - contentSize.height;
          var endZ = this.startPosition.z;
          var endPosition = new Vec3(endX, endY, endZ);
          var god = gameData.godTypePerColumn[this.columnId];
          var direction = god === GodFeatureTypes.Ares ? 1 : -1;
          tween(this.node).to(2.0, {
            position: endPosition
          }, {
            easing: 'backOut'
          }).call(function () {
            var endScale = new Vec3(0, _this2.startScale.y, _this2.startScale.z);
            var newEndPosition = new Vec3(endX + direction * (contentSize.width * 0.5 * _this2.startScale.x), endY, endZ);
            tween(_this2.node).to(0.2, {
              position: newEndPosition,
              scale: endScale
            }, {
              easing: 'linear'
            }).call(function () {
              _this2.reset();
              resolvePromise.resolve();
              var index = _this2.gameplayModel.respinResolvePromise.indexOf(resolvePromise);
              if (index > -1) {
                _this2.gameplayModel.respinResolvePromise.splice(index, 1);
              }
            }).start();
          }).start();
        };
        _proto.reset = function reset() {
          this.node.position = this.startPosition;
          this.node.scale = this.startScale;
        };
        return GodSymbolComponent;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "columnId", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/gridMask.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Mask, GraphicsComponent, Color, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Mask = module.Mask;
      GraphicsComponent = module.GraphicsComponent;
      Color = module.Color;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "cd5a6fWYEFFCKNc+PNzLyMR", "gridMask", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var GridMask = exports('GridMask', (_dec = ccclass('GridMask'), _dec2 = menu('UI/GridMask'), _dec(_class = _dec2(_class = executeInEditMode(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GridMask, _Component);
        function GridMask() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = GridMask.prototype;
        _proto.start = function start() {
          this.drawGraphicsMask();
        };
        _proto.drawGraphicsMask = function drawGraphicsMask() {
          var mask = this.getComponent(Mask);
          var g = mask.getComponent(GraphicsComponent);
          // const g = this.getComponent(GraphicsComponent); // To see in editor

          g.clear();
          g.lineWidth = 2;
          g.strokeColor = Color.WHITE;
          g.fillColor = Color.WHITE;
          g.moveTo(-501, 170);
          g.lineTo(-361, 170);
          g.lineTo(-361, 234);
          g.lineTo(-221, 230);
          g.lineTo(-221, 296);
          g.lineTo(-70, 296);
          g.lineTo(-70, 360);
          g.lineTo(70, 360);
          g.lineTo(70, 296);
          g.lineTo(220, 296);
          g.lineTo(220, 233);
          g.lineTo(361, 233);
          g.lineTo(361, 170);
          g.lineTo(501, 170);
          g.lineTo(501, -221);
          g.lineTo(361, -221);
          g.lineTo(361, -284);
          g.lineTo(220, -284);
          g.lineTo(220, -348);
          g.lineTo(70, -348);
          g.lineTo(70, -410);
          g.lineTo(-70, -410);
          g.lineTo(-70, -348);
          g.lineTo(-221, -348);
          g.lineTo(-221, -284);
          g.lineTo(-361, -284);
          g.lineTo(-361, -221);
          g.lineTo(-501, -221);
          g.close();
          g.fill();
          g.stroke();
        };
        return GridMask;
      }(Component)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/hudComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './hudModel.ts', './dropDownMenu.ts', './eventSignals.ts', './roundTypes.ts', './gameplayModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Toggle, Component, HudModel, DropDownMenu, startRoundSignal, stakeChangedSignal, RoundTypes, GameplayModel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Toggle = module.Toggle;
      Component = module.Component;
    }, function (module) {
      HudModel = module.HudModel;
    }, function (module) {
      DropDownMenu = module.default;
    }, function (module) {
      startRoundSignal = module.startRoundSignal;
      stakeChangedSignal = module.stakeChangedSignal;
    }, function (module) {
      RoundTypes = module.RoundTypes;
    }, function (module) {
      GameplayModel = module.GameplayModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "ab21ehty6tHerJyn3+FwlhT", "hudComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var HudComponent = exports('HudComponent', (_dec = ccclass('HudComponent'), _dec2 = property(DropDownMenu), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Toggle), _dec6 = property(Toggle), _dec7 = property(Toggle), _dec8 = property(Toggle), _dec9 = property(Toggle), _dec10 = property(Toggle), _dec11 = property(Toggle), _dec12 = property(Toggle), _dec13 = property(Toggle), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HudComponent, _Component);
        function HudComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.hudModel = null;
          _initializerDefineProperty(_this, "stakeMenu", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "balanceValue", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wonValue", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "easyTumbleToggle", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mysteryColumnToggle", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "godCoinCheatToggle", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pillarCheatToggle", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "randomCheatToggle", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bonusJackpotToggle", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bonusCollectToggle", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "respinCheatToggle", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoplayToggle", _descriptor12, _assertThisInitialized(_this));
          _this.onRoundStartBind = _this.roundStartHandler.bind(_assertThisInitialized(_this));
          _this.onStakeSelectedBind = _this.stakeSelectedHandler.bind(_assertThisInitialized(_this));
          return _this;
        }
        var _proto = HudComponent.prototype;
        _proto.onLoad = function onLoad() {
          this.hudModel = this.addComponent(HudModel);
          this.hudModel.balanceLabel = this.balanceValue;
          this.hudModel.wonLabel = this.wonValue;
          this.hudModel.easyTumbleToggle = this.easyTumbleToggle;
          this.hudModel.mysteryColumnToggle = this.mysteryColumnToggle;
          this.hudModel.godCoinCheatToggle = this.godCoinCheatToggle;
          this.hudModel.pillarCheatToggle = this.pillarCheatToggle;
          this.hudModel.randomCheatToggle = this.randomCheatToggle;
          this.hudModel.bonusCollectToggle = this.bonusCollectToggle;
          this.hudModel.bonusJackpotToggle = this.bonusJackpotToggle;
          this.hudModel.respinCheatToggle = this.respinCheatToggle;
          this.hudModel.autoplayToggle = this.autoplayToggle;
          startRoundSignal.addListener(this.onRoundStartBind);
          this.stakeMenu.onOptionSelectedSignal.addListener(this.onStakeSelectedBind);
          stakeChangedSignal.dispatch(this.hudModel.stake);
        };
        _proto.onDestroy = function onDestroy() {
          var _this$stakeMenu;
          startRoundSignal.removeListener(this.onRoundStartBind);
          (_this$stakeMenu = this.stakeMenu) == null || (_this$stakeMenu = _this$stakeMenu.onOptionSelectedSignal) == null || _this$stakeMenu.removeListener(this.onStakeSelectedBind);
        };
        _proto.start = function start() {
          this.hudModel.init(this.node.scene.getComponentInChildren(GameplayModel));
        };
        _proto.roundStartHandler = function roundStartHandler(roundType) {
          if (!this.hudModel.hasSufficientBalance || roundType === RoundTypes.FreeSpin) {
            return;
          }
          this.deductStake();
        };
        _proto.stakeSelectedHandler = function stakeSelectedHandler(stake) {
          var stakeString = stake.replace('€', '');
          var stakeCents = Number(stakeString) * 100;
          if (!stakeCents) {
            return;
          }
          this.hudModel.stake = stakeCents;
          stakeChangedSignal.dispatch(stakeCents);
        };
        _proto.deductStake = function deductStake() {
          var currentBalance = this.hudModel.balance;
          var currentStake = this.hudModel.stake;
          this.hudModel.balance = currentBalance - currentStake;
        };
        return HudComponent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "stakeMenu", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "balanceValue", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "wonValue", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "easyTumbleToggle", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mysteryColumnToggle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "godCoinCheatToggle", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "pillarCheatToggle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "randomCheatToggle", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bonusJackpotToggle", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bonusCollectToggle", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "respinCheatToggle", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "autoplayToggle", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/hudModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './eventSignals.ts', './roundTypes.ts'], function (exports) {
  var _inheritsLoose, _createClass, _assertThisInitialized, cclegacy, _decorator, Component, addToBalanceSignal, setBalanceSignal, addToWonSignal, setWonSignal, setRoundTypeSignal, RoundTypes;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      addToBalanceSignal = module.addToBalanceSignal;
      setBalanceSignal = module.setBalanceSignal;
      addToWonSignal = module.addToWonSignal;
      setWonSignal = module.setWonSignal;
      setRoundTypeSignal = module.setRoundTypeSignal;
    }, function (module) {
      RoundTypes = module.RoundTypes;
    }],
    execute: function () {
      cclegacy._RF.push({}, "39f45a2r3xBgr7YeTwI9mwG", "hudModel", undefined);
      var ccclass = _decorator.ccclass;
      ccclass('HudModel');
      var HudModel = exports('HudModel', /*#__PURE__*/function (_Component) {
        _inheritsLoose(HudModel, _Component);
        function HudModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.gameplayModel = null;
          _this.balanceLabel = void 0;
          _this.wonLabel = void 0;
          _this.easyTumbleToggle = void 0;
          _this.mysteryColumnToggle = void 0;
          _this.godCoinCheatToggle = void 0;
          _this.pillarCheatToggle = void 0;
          _this.randomCheatToggle = void 0;
          _this.bonusCollectToggle = void 0;
          _this.bonusJackpotToggle = void 0;
          _this.respinCheatToggle = void 0;
          _this.autoplayToggle = void 0;
          _this.isAutoplayStarted = false;
          _this.wonValue = 0;
          _this.stake = 25;
          _this.addToBalanceBind = _this.onAddToBalanceHandler.bind(_assertThisInitialized(_this));
          _this.addToWonBind = _this.onAddToWonHandler.bind(_assertThisInitialized(_this));
          _this.setBalanceBind = _this.onSetBalanceHandler.bind(_assertThisInitialized(_this));
          _this.setWonBind = _this.onSetWonHandler.bind(_assertThisInitialized(_this));
          _this.setRoundTypeBind = _this.setRoundTypeHandler.bind(_assertThisInitialized(_this));
          _this.toggleChangedBind = _this.toggleChangedHandler.bind(_assertThisInitialized(_this));
          return _this;
        }
        var _proto = HudModel.prototype;
        _proto.setWinnings = function setWinnings(amount) {
          this.won = amount;
          this.balance += amount;
        };
        _proto.onLoad = function onLoad() {
          addToBalanceSignal.addListener(this.addToBalanceBind);
          setBalanceSignal.addListener(this.setBalanceBind);
          addToWonSignal.addListener(this.addToWonBind);
          setWonSignal.addListener(this.setWonBind);
          setRoundTypeSignal.addListener(this.setRoundTypeBind);
        };
        _proto.onDestroy = function onDestroy() {
          var _this$autoplayToggle;
          addToBalanceSignal.removeListener(this.addToBalanceBind);
          setBalanceSignal.removeListener(this.setBalanceBind);
          addToWonSignal.removeListener(this.addToWonBind);
          setWonSignal.removeListener(this.setWonBind);
          setRoundTypeSignal.removeListener(this.setRoundTypeBind);
          (_this$autoplayToggle = this.autoplayToggle) == null || (_this$autoplayToggle = _this$autoplayToggle.node) == null || _this$autoplayToggle.off('toggle', this.toggleChangedBind);
        };
        _proto.init = function init(gameplayModel) {
          var _this$autoplayToggle2;
          this.gameplayModel = gameplayModel;
          (_this$autoplayToggle2 = this.autoplayToggle) == null || (_this$autoplayToggle2 = _this$autoplayToggle2.node) == null || _this$autoplayToggle2.on('toggle', this.toggleChangedBind);
        };
        _proto.toggleChangedHandler = function toggleChangedHandler(eventToggle) {
          var _this$gameplayModel;
          if (((_this$gameplayModel = this.gameplayModel) == null ? void 0 : _this$gameplayModel.roundType) !== RoundTypes.Normal && eventToggle.isChecked) {
            eventToggle.isChecked = false;
            return;
          }
          if (!eventToggle.isChecked) {
            this.isAutoplayStarted = false;
          }
        };
        _proto.setRoundTypeHandler = function setRoundTypeHandler() {
          this.autoplayToggle.isChecked = false;
        };
        _proto.onAddToBalanceHandler = function onAddToBalanceHandler(amount) {
          this.balance += amount;
        };
        _proto.onSetBalanceHandler = function onSetBalanceHandler(amount) {
          this.balance = amount;
        };
        _proto.onAddToWonHandler = function onAddToWonHandler(amount) {
          this.won += amount;
        };
        _proto.onSetWonHandler = function onSetWonHandler(amount) {
          this.won = amount;
        };
        _createClass(HudModel, [{
          key: "isEasyTumbleCheat",
          get: function get() {
            var _this$easyTumbleToggl, _this$easyTumbleToggl2;
            return (_this$easyTumbleToggl = (_this$easyTumbleToggl2 = this.easyTumbleToggle) == null ? void 0 : _this$easyTumbleToggl2.isChecked) != null ? _this$easyTumbleToggl : false;
          }
        }, {
          key: "isMysteryColumnCheat",
          get: function get() {
            var _this$mysteryColumnTo, _this$mysteryColumnTo2;
            return (_this$mysteryColumnTo = (_this$mysteryColumnTo2 = this.mysteryColumnToggle) == null ? void 0 : _this$mysteryColumnTo2.isChecked) != null ? _this$mysteryColumnTo : false;
          }
        }, {
          key: "isGodCoinCheat",
          get: function get() {
            var _this$godCoinCheatTog, _this$godCoinCheatTog2;
            return (_this$godCoinCheatTog = (_this$godCoinCheatTog2 = this.godCoinCheatToggle) == null ? void 0 : _this$godCoinCheatTog2.isChecked) != null ? _this$godCoinCheatTog : false;
          }
        }, {
          key: "isPillarCheat",
          get: function get() {
            var _this$pillarCheatTogg, _this$pillarCheatTogg2;
            return (_this$pillarCheatTogg = (_this$pillarCheatTogg2 = this.pillarCheatToggle) == null ? void 0 : _this$pillarCheatTogg2.isChecked) != null ? _this$pillarCheatTogg : false;
          }
        }, {
          key: "isRandomCheat",
          get: function get() {
            var _this$randomCheatTogg, _this$randomCheatTogg2;
            return (_this$randomCheatTogg = (_this$randomCheatTogg2 = this.randomCheatToggle) == null ? void 0 : _this$randomCheatTogg2.isChecked) != null ? _this$randomCheatTogg : false;
          }
        }, {
          key: "isBonusCollectCheat",
          get: function get() {
            var _this$bonusCollectTog, _this$bonusCollectTog2;
            return (_this$bonusCollectTog = (_this$bonusCollectTog2 = this.bonusCollectToggle) == null ? void 0 : _this$bonusCollectTog2.isChecked) != null ? _this$bonusCollectTog : false;
          }
        }, {
          key: "isBonusJackpotCheat",
          get: function get() {
            var _this$bonusJackpotTog, _this$bonusJackpotTog2;
            return (_this$bonusJackpotTog = (_this$bonusJackpotTog2 = this.bonusJackpotToggle) == null ? void 0 : _this$bonusJackpotTog2.isChecked) != null ? _this$bonusJackpotTog : false;
          }
        }, {
          key: "isRespinCheat",
          get: function get() {
            var _this$respinCheatTogg, _this$respinCheatTogg2;
            return (_this$respinCheatTogg = (_this$respinCheatTogg2 = this.respinCheatToggle) == null ? void 0 : _this$respinCheatTogg2.isChecked) != null ? _this$respinCheatTogg : false;
          }
        }, {
          key: "isAutoplayEnabled",
          get: function get() {
            var _this$autoplayToggle$, _this$autoplayToggle3;
            return (_this$autoplayToggle$ = (_this$autoplayToggle3 = this.autoplayToggle) == null ? void 0 : _this$autoplayToggle3.isChecked) != null ? _this$autoplayToggle$ : false;
          }
        }, {
          key: "isRespinPopEnabled",
          get: function get() {
            return false;
          }
        }, {
          key: "isRespinGodsEnabled",
          get: function get() {
            return true;
          }
        }, {
          key: "isRollToCenterEnabled",
          get: function get() {
            return true;
          }
        }, {
          key: "balance",
          get: function get() {
            return Number(this.balanceLabel.string.replace('€', '')) * 100;
          },
          set: function set(value) {
            if (isNaN(value)) {
              console.warn('Cannot set balance to a non-number value');
            }
            var euros = value * 0.01;
            if (this.balanceLabel) {
              this.balanceLabel.string = '€' + euros.toFixed(2);
            }
          }
        }, {
          key: "won",
          get: function get() {
            return Number(this.wonLabel.string.replace('€', '')) * 100;
          },
          set: function set(value) {
            this.wonValue = value;
            var euros = value * 0.01;
            if (this.wonLabel) {
              this.wonLabel.string = '€' + euros.toFixed(2);
            }
          }
        }, {
          key: "hasSufficientBalance",
          get: function get() {
            return this.balance - this.stake >= 0;
          }
        }]);
        return HudModel;
      }(Component));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/jackpotComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './eventSignals.ts', './jackpotTypes.ts', './jackpotModel.ts', './coinData.ts', './hudModel.ts', './roundTypes.ts', './bonusTypes.ts', './commonAnimations.ts', './randomizer.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Enum, RichText, Toggle, CCFloat, Sprite, Color, Component, moveCoinCompleteSignal, setRoundTypeSignal, bonusActivateItemSignal, freeSpinsToggleJackpotSignal, stakeChangedSignal, JackpotTypes, JackpotTriggerTypes, jackpotTypeToTriggerType, JackpotModel, CoinTypes, HudModel, RoundTypes, BonusItemTypes, scaleFadeAnimation, createWeightedArray;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Enum = module.Enum;
      RichText = module.RichText;
      Toggle = module.Toggle;
      CCFloat = module.CCFloat;
      Sprite = module.Sprite;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      moveCoinCompleteSignal = module.moveCoinCompleteSignal;
      setRoundTypeSignal = module.setRoundTypeSignal;
      bonusActivateItemSignal = module.bonusActivateItemSignal;
      freeSpinsToggleJackpotSignal = module.freeSpinsToggleJackpotSignal;
      stakeChangedSignal = module.stakeChangedSignal;
    }, function (module) {
      JackpotTypes = module.JackpotTypes;
      JackpotTriggerTypes = module.JackpotTriggerTypes;
      jackpotTypeToTriggerType = module.jackpotTypeToTriggerType;
    }, function (module) {
      JackpotModel = module.JackpotModel;
    }, function (module) {
      CoinTypes = module.CoinTypes;
    }, function (module) {
      HudModel = module.HudModel;
    }, function (module) {
      RoundTypes = module.RoundTypes;
    }, function (module) {
      BonusItemTypes = module.BonusItemTypes;
    }, function (module) {
      scaleFadeAnimation = module.scaleFadeAnimation;
    }, function (module) {
      createWeightedArray = module.createWeightedArray;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "22ef1MM2EJJMrakJ6H1k64H", "jackpotComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var JackpotComponent = exports('JackpotComponent', (_dec = ccclass('JackpotComponent'), _dec2 = property(Node), _dec3 = property({
        type: Enum(JackpotTypes)
      }), _dec4 = property(RichText), _dec5 = property([Toggle]), _dec6 = property(CCFloat), _dec7 = property(CCFloat), _dec8 = property({
        type: CCFloat,
        visible: function visible() {
          return this.jackpotTriggerType === JackpotTriggerTypes.Progress;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(JackpotComponent, _Component);
        function JackpotComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.jackpotModel = null;
          _this.hudModel = null;
          _initializerDefineProperty(_this, "jackpotCoin", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jackpotType", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jackpotValueLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jackpotBonusToggles", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jackpotStartValue", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jackpotMaxValue", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contributionMultiplier", _descriptor7, _assertThisInitialized(_this));
          _this.drawCashGrabValueWeights = {
            0: 350,
            1: 15,
            2: 8,
            3: 4,
            4: 2,
            5: 1
          };
          _this.cashGrabContributionList = [];
          _this.isPayedOut = false;
          _this.roundType = RoundTypes.Normal;
          _this.setRoundTypeBind = _this.setRoundTypeHandler.bind(_assertThisInitialized(_this));
          _this.moveCoinCompleteBind = _this.moveCoinCompleteHandler.bind(_assertThisInitialized(_this));
          _this.bonusActivateItemBind = _this.bonusActivateItemHandler.bind(_assertThisInitialized(_this));
          _this.freeSpinsToggleJackpotBind = _this.freeSpinsToggleJackpotHandler.bind(_assertThisInitialized(_this));
          _this.stakeChangedBind = _this.stakeChangedHandler.bind(_assertThisInitialized(_this));
          _this.timer = 0;
          _this.randomTime = 0;
          return _this;
        }
        var _proto = JackpotComponent.prototype;
        _proto.onLoad = function onLoad() {
          this.jackpotModel = this.addComponent(JackpotModel);
          this.jackpotModel.jackpotType = this.jackpotType;
          this.jackpotModel.jackpotLabel = this.jackpotValueLabel;
          this.jackpotModel.jackpotBonusToggles = this.jackpotBonusToggles;
          this.jackpotModel.contributionMultiplier = this.contributionMultiplier;
          this.createCashGrabContributionList();
          moveCoinCompleteSignal.addListener(this.moveCoinCompleteBind);
          setRoundTypeSignal.addListener(this.setRoundTypeBind);
          bonusActivateItemSignal.addListener(this.bonusActivateItemBind);
          freeSpinsToggleJackpotSignal.addListener(this.freeSpinsToggleJackpotBind);
          stakeChangedSignal.addListener(this.stakeChangedBind);
        };
        _proto.createCashGrabContributionList = function createCashGrabContributionList() {
          this.cashGrabContributionList = createWeightedArray(this.drawCashGrabValueWeights);
        };
        _proto.start = function start() {
          this.hudModel = this.node.scene.getComponentInChildren(HudModel);
          this.drawRandomTime();
        };
        _proto.onDestroy = function onDestroy() {
          moveCoinCompleteSignal.removeListener(this.moveCoinCompleteBind);
          setRoundTypeSignal.removeListener(this.setRoundTypeBind);
          bonusActivateItemSignal.removeListener(this.bonusActivateItemBind);
          freeSpinsToggleJackpotSignal.removeListener(this.freeSpinsToggleJackpotBind);
          stakeChangedSignal.removeListener(this.stakeChangedBind);
        };
        _proto.update = function update(deltaTime) {
          if (this.jackpotTriggerType === JackpotTriggerTypes.Progress) {
            this.timer += deltaTime;
            if (this.timer >= this.randomTime) {
              this.updateJackpot(this.hudModel.stake);
              this.drawRandomTime();
              this.timer = 0;
            }
          }
        };
        _proto.drawRandomTime = function drawRandomTime() {
          this.randomTime = Math.floor(Math.random() * 8) + 2;
        };
        _proto.stakeChangedHandler = function stakeChangedHandler(stake) {
          var currentStake = stake;
          if (this.jackpotModel.isGlobalJackpot) {
            currentStake = 1.0;
          }
          this.jackpotModel.jackpotMinValue = this.jackpotStartValue * currentStake;
          this.jackpotModel.jackpotMaxValue = this.jackpotMaxValue * currentStake;
          this.jackpotModel.jackpotValue = this.jackpotModel.jackpotMinValue;
        };
        _proto.updateJackpot = function updateJackpot(stake) {
          var addValue = this.contributionMultiplier;
          if (this.jackpotTriggerType === JackpotTriggerTypes.CashGrab) {
            addValue = this.cashGrabContributionList[Math.floor(Math.random() * this.cashGrabContributionList.length)];
          }
          this.jackpotModel.jackpotValue += stake * this.contributionMultiplier;
          this.jackpotModel.jackpotValue = Math.min(this.jackpotModel.jackpotValue, this.jackpotModel.jackpotMaxValue);
        };
        _proto.payoutJackpot = function payoutJackpot(includedTypes) {
          if (this.isPayedOut || !includedTypes.includes(this.jackpotTriggerType)) {
            return;
          }
          this.hudModel.balance += this.jackpotModel.jackpotValue;
          this.hudModel.won += this.jackpotModel.jackpotValue;
          this.jackpotModel.reset();
          if (this.jackpotTriggerType === JackpotTriggerTypes.Progress) {
            this.isPayedOut = true;
            this.setAlpha(0.5);
          }
        };
        _proto.setAlpha = function setAlpha(alpha) {
          var sprite = this.node.getComponent(Sprite);
          sprite.color = new Color(sprite.color.r, sprite.color.g, sprite.color.b, alpha * 255);
        };
        _proto.enableToggleObjects = function enableToggleObjects(enable) {
          this.jackpotBonusToggles.forEach(function (toggle) {
            toggle.node.active = enable;
          });
        };
        _proto.checkToggles = function checkToggles(enable, count) {
          this.jackpotBonusToggles.forEach(function (toggle, index) {
            if (count !== undefined && index >= count) {
              toggle.isChecked = false;
              return;
            }
            toggle.isChecked = enable;
            if (enable) {
              scaleFadeAnimation(toggle.checkMark.node, toggle.node);
            }
          });
        };
        _proto.reset = function reset(enableToggles) {
          if (enableToggles === void 0) {
            enableToggles = false;
          }
          this.isPayedOut = false;
          this.checkToggles(false);
          this.enableToggleObjects(enableToggles);
          this.setAlpha(1);
        };
        _proto.moveCoinCompleteHandler = function moveCoinCompleteHandler(args) {
          if (args.coinData.coinType !== CoinTypes.Jackpot || args.coinData.valueType !== this.jackpotType) {
            return;
          }
          if (args.roundType === RoundTypes.FreeSpin && this.jackpotTriggerType === JackpotTriggerTypes.CashGrab) {
            this.payoutJackpot([JackpotTriggerTypes.CashGrab]);
            return;
          }
          scaleFadeAnimation(this.jackpotCoin, this.node);
          if (this.jackpotTriggerType !== JackpotTriggerTypes.Progress) {
            this.updateJackpot(this.hudModel.stake);
          } else {
            freeSpinsToggleJackpotSignal.dispatch({
              jackpotType: this.jackpotType,
              amount: 1
            });
          }
        };
        _proto.setRoundTypeHandler = function setRoundTypeHandler(roundType) {
          this.roundType = roundType.roundType;
          this.reset(this.roundType !== RoundTypes.Normal);
          if (this.roundType === RoundTypes.Bonus || this.roundType === RoundTypes.FreeSpin) {
            this.enableToggleObjects(true);
          }
        };
        _proto.bonusActivateItemHandler = function bonusActivateItemHandler(args) {
          var item = args.item;
          if (item.itemType === BonusItemTypes.Jackpot && item.jackpotType === this.jackpotType && this.jackpotTriggerType === JackpotTriggerTypes.Progress) {
            var checkedCount = this.checkedToggleCount + 1;
            this.checkToggles(true, checkedCount);
            if (checkedCount === this.jackpotBonusToggles.length) {
              this.payoutJackpot([JackpotTriggerTypes.Progress]);
            }
          }
        };
        _proto.freeSpinsToggleJackpotHandler = function freeSpinsToggleJackpotHandler(args) {
          var _args$amount;
          if (args.jackpotType !== this.jackpotType || this.jackpotTriggerType !== JackpotTriggerTypes.Progress) {
            return;
          }
          var checkedCount = this.checkedToggleCount + ((_args$amount = args.amount) != null ? _args$amount : 0);
          this.checkToggles(true, checkedCount);
          if (checkedCount === this.jackpotBonusToggles.length) {
            this.payoutJackpot([JackpotTriggerTypes.Progress]);
          }
        };
        _createClass(JackpotComponent, [{
          key: "checkedToggleCount",
          get: function get() {
            return this.jackpotBonusToggles.filter(function (toggle) {
              return toggle.isChecked;
            }).length;
          }
        }, {
          key: "jackpotTriggerType",
          get: function get() {
            return jackpotTypeToTriggerType[this.jackpotType];
          }
        }]);
        return JackpotComponent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "jackpotCoin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "jackpotType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "jackpotValueLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "jackpotBonusToggles", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "jackpotStartValue", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2.5;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "jackpotMaxValue", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 30;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "contributionMultiplier", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/jackpotModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './jackpotTypes.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, Component, globalJackpotTypes;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
    }, function (module) {
      globalJackpotTypes = module.globalJackpotTypes;
    }],
    execute: function () {
      cclegacy._RF.push({}, "de2acGns+9HKrULlGiSH+TJ", "jackpotModel", undefined);
      var JackpotModel = exports('JackpotModel', /*#__PURE__*/function (_Component) {
        _inheritsLoose(JackpotModel, _Component);
        function JackpotModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.jackpotLabel = void 0;
          _this.jackpotType = void 0;
          _this.jackpotMinValue = 10000;
          _this.jackpotMaxValue = 100000;
          _this.contributionMultiplier = 1;
          _this.jackpotBonusToggles = [];
          _this.currentJackpotValue = 0;
          return _this;
        }
        var _proto = JackpotModel.prototype;
        _proto.reset = function reset() {
          this.jackpotValue = this.jackpotMinValue;
        };
        _proto.resetBonusJackpotToggles = function resetBonusJackpotToggles() {
          this.jackpotBonusToggles.forEach(function (toggle) {
            toggle.isChecked = false;
            toggle.node.active = false;
          });
        };
        _proto.enableNextToggle = function enableNextToggle() {
          for (var i = 0; i < this.jackpotBonusToggles.length; i++) {
            var checked = this.jackpotBonusToggles[i].isChecked;
            if (checked) {
              continue;
            }
            this.jackpotBonusToggles[i].isChecked = true;
            break;
          }
        };
        _createClass(JackpotModel, [{
          key: "totalBonusJackpotCount",
          get: function get() {
            return this.jackpotBonusToggles.length;
          }
        }, {
          key: "activeBonusJackpotCount",
          get: function get() {
            return this.jackpotBonusToggles.filter(function (toggle) {
              return toggle.isChecked;
            }).length;
          }
        }, {
          key: "hasAllTogglesChecked",
          get: function get() {
            return this.jackpotBonusToggles.every(function (toggle) {
              return toggle.isChecked;
            });
          }
        }, {
          key: "activateBonusJackpotToggles",
          set: function set(value) {
            this.jackpotBonusToggles.forEach(function (toggle) {
              toggle.node.active = value;
            });
          }
        }, {
          key: "jackpotValue",
          get: function get() {
            return this.currentJackpotValue;
          },
          set: function set(value) {
            this.currentJackpotValue = value;
            var euros = this.currentJackpotValue * 0.01;
            this.jackpotLabel.string = '€' + euros.toFixed(2);
          }
        }, {
          key: "isGlobalJackpot",
          get: function get() {
            return globalJackpotTypes.includes(this.jackpotType);
          }
        }]);
        return JackpotModel;
      }(Component));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/jackpotTypes.ts", ['cc', './godFeatureTypes.ts'], function (exports) {
  var cclegacy, GodFeatureTypes;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GodFeatureTypes = module.GodFeatureTypes;
    }],
    execute: function () {
      var _godToJackpotType, _jackpotTypeToTrigger, _jackpotTypeToWeight;
      cclegacy._RF.push({}, "5b5cbRhZZtKYKp5ZSo334le", "jackpotTypes", undefined);
      var JackpotTypes = exports('JackpotTypes', /*#__PURE__*/function (JackpotTypes) {
        JackpotTypes["Unreal"] = "unreal";
        JackpotTypes["Divine"] = "divine";
        JackpotTypes["Heroic"] = "heroic";
        JackpotTypes["Warlord"] = "warlord";
        JackpotTypes["Mythic"] = "mythic";
        JackpotTypes["Legendary"] = "legendary";
        JackpotTypes["Athena"] = "athena";
        JackpotTypes["Ares"] = "ares";
        JackpotTypes["Godlike"] = "godlike";
        return JackpotTypes;
      }({}));
      var JackpotTriggerTypes = exports('JackpotTriggerTypes', /*#__PURE__*/function (JackpotTriggerTypes) {
        JackpotTriggerTypes["CashGrab"] = "cashGrab";
        JackpotTriggerTypes["Progress"] = "progress";
        return JackpotTriggerTypes;
      }({}));
      var jackpotIdToJackpotType = exports('jackpotIdToJackpotType', {
        0: JackpotTypes.Unreal,
        1: JackpotTypes.Divine,
        2: JackpotTypes.Warlord,
        3: JackpotTypes.Heroic,
        4: JackpotTypes.Mythic,
        5: JackpotTypes.Legendary,
        6: JackpotTypes.Athena,
        7: JackpotTypes.Ares,
        8: JackpotTypes.Godlike
      });
      var godToJackpotType = exports('godToJackpotType', (_godToJackpotType = {}, _godToJackpotType[GodFeatureTypes.Athena] = JackpotTypes.Athena, _godToJackpotType[GodFeatureTypes.Ares] = JackpotTypes.Ares, _godToJackpotType));
      var jackpotTypeToTriggerType = exports('jackpotTypeToTriggerType', (_jackpotTypeToTrigger = {}, _jackpotTypeToTrigger[JackpotTypes.Unreal] = JackpotTriggerTypes.CashGrab, _jackpotTypeToTrigger[JackpotTypes.Divine] = JackpotTriggerTypes.CashGrab, _jackpotTypeToTrigger[JackpotTypes.Heroic] = JackpotTriggerTypes.CashGrab, _jackpotTypeToTrigger[JackpotTypes.Warlord] = JackpotTriggerTypes.CashGrab, _jackpotTypeToTrigger[JackpotTypes.Mythic] = JackpotTriggerTypes.CashGrab, _jackpotTypeToTrigger[JackpotTypes.Legendary] = JackpotTriggerTypes.CashGrab, _jackpotTypeToTrigger[JackpotTypes.Athena] = JackpotTriggerTypes.Progress, _jackpotTypeToTrigger[JackpotTypes.Ares] = JackpotTriggerTypes.Progress, _jackpotTypeToTrigger[JackpotTypes.Godlike] = JackpotTriggerTypes.Progress, _jackpotTypeToTrigger));
      var jackpotTypeToWeight = exports('jackpotTypeToWeight', (_jackpotTypeToWeight = {}, _jackpotTypeToWeight[JackpotTypes.Unreal] = 10, _jackpotTypeToWeight[JackpotTypes.Divine] = 10, _jackpotTypeToWeight[JackpotTypes.Heroic] = 40, _jackpotTypeToWeight[JackpotTypes.Warlord] = 40, _jackpotTypeToWeight[JackpotTypes.Mythic] = 50, _jackpotTypeToWeight[JackpotTypes.Legendary] = 50, _jackpotTypeToWeight[JackpotTypes.Athena] = 1, _jackpotTypeToWeight[JackpotTypes.Ares] = 1, _jackpotTypeToWeight[JackpotTypes.Godlike] = 1, _jackpotTypeToWeight));
      var globalJackpotTypes = exports('globalJackpotTypes', [JackpotTypes.Godlike]);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./DropdownMenuCreator.ts', './audioComponent.ts', './backgroundAudioComponent.ts', './bonusItemModel.ts', './bonusModel.ts', './bonusRollComponent.ts', './coinComponent.ts', './coinData.ts', './godFeatureComponent.ts', './godFeatureDrop.ts', './godFeatureModel.ts', './jackpotComponent.ts', './jackpotModel.ts', './moveCoins.ts', './game.ts', './gameInput.ts', './gameplayCalculations.ts', './gameplayModel.ts', './playfieldComponent.ts', './playfieldModel.ts', './playfieldUpdate.ts', './randomizer.ts', './reelAnimations.ts', './reelArgs.ts', './reelComponent.ts', './reelConfig.ts', './reelContext.ts', './reelModel.ts', './reelService.ts', './reelStatus.ts', './resize.ts', './responsive.ts', './godSymbolCompont.ts', './symbolModel.ts', './symbolNode.ts', './symbolPosition.ts', './bonusSideType.ts', './bonusTypes.ts', './featureStatus.ts', './gameClasses.ts', './gameData.ts', './godFeatureTypes.ts', './jackpotTypes.ts', './reelsData.ts', './roundTypes.ts', './specialSymbols.ts', './symbolAnimationData.ts', './symbols.ts', './tumbleSymbolData.ts', './winData.ts', './backgroundComponent.ts', './bonusBuyComponent.ts', './dropDownMenu.ts', './hudComponent.ts', './hudModel.ts', './menuButton.ts', './playButton.ts', './toggleUpdater.ts', './SpAnimator.ts', './array.ts', './arrayUtils.ts', './commonAnimations.ts', './curveTween.ts', './eventSignals.ts', './gridMask.ts', './maskMover.ts', './resolvablePromise.ts', './signal.ts', './tumbleAlpha.ts', './uniqueId.ts', './view.ts', './wait.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/maskMover.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './eventSignals.ts', './bonusModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec2, CCFloat, CCInteger, ParticleSystem2D, UITransform, Size, Graphics, tween, Component, startRoundSignal, increaseTumbleCountSignal, setRoundTypeSignal, BonusModel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      CCFloat = module.CCFloat;
      CCInteger = module.CCInteger;
      ParticleSystem2D = module.ParticleSystem2D;
      UITransform = module.UITransform;
      Size = module.Size;
      Graphics = module.Graphics;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      startRoundSignal = module.startRoundSignal;
      increaseTumbleCountSignal = module.increaseTumbleCountSignal;
      setRoundTypeSignal = module.setRoundTypeSignal;
    }, function (module) {
      BonusModel = module.BonusModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "d69dbRccRdG56tuqFu6qvV9", "maskMover", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var maskMover = exports('maskMover', (_dec = ccclass('maskMover'), _dec2 = property(Vec2), _dec3 = property(Vec2), _dec4 = property(CCFloat), _dec5 = property(CCInteger), _dec6 = property(ParticleSystem2D), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(maskMover, _Component);
        function maskMover() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.bonusModel = null;
          _initializerDefineProperty(_this, "startPosition", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "endPosition", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveDuration", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveSteps", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "activationParticle", _descriptor5, _assertThisInitialized(_this));
          _this.distancePerStep = new Vec2();
          _this.uiTransform = void 0;
          _this.progress = 0;
          _this.startRoundBind = _this.startRoundHandler.bind(_assertThisInitialized(_this));
          _this.increaseTumbleCountBind = _this.increaseTumbleCountHandler.bind(_assertThisInitialized(_this));
          _this.setRoundTypeBind = _this.setRoundTypeHandler.bind(_assertThisInitialized(_this));
          return _this;
        }
        var _proto = maskMover.prototype;
        _proto.onLoad = function onLoad() {
          this.calculateDistancePerStep();
          startRoundSignal.addListener(this.startRoundBind);
          increaseTumbleCountSignal.addListener(this.increaseTumbleCountBind);
          setRoundTypeSignal.addListener(this.setRoundTypeBind);
        };
        _proto.onDestroy = function onDestroy() {
          startRoundSignal.removeListener(this.startRoundBind);
          increaseTumbleCountSignal.removeListener(this.increaseTumbleCountBind);
          setRoundTypeSignal.removeListener(this.setRoundTypeBind);
        };
        _proto.calculateDistancePerStep = function calculateDistancePerStep() {
          var distance = new Vec2(this.endPosition.x - this.startPosition.x, this.endPosition.y - this.startPosition.y);
          this.distancePerStep = distance.divide(new Vec2(this.moveSteps, this.moveSteps));
        };
        _proto.start = function start() {
          this.bonusModel = this.node.scene.getComponentInChildren(BonusModel);
          this.uiTransform = this.node.getComponent(UITransform);
          this.uiTransform.setContentSize(this.startPosition.x, this.startPosition.y);
        };
        _proto.reset = function reset() {
          this.progress = 0;
          this.activationParticle.stopSystem();
          this.increaseTumbleCountHandler(0);
        };
        _proto.startRoundHandler = function startRoundHandler() {
          this.reset();
        };
        _proto.increaseTumbleCountHandler = function increaseTumbleCountHandler(count) {
          var _this2 = this;
          if (!this.uiTransform || this.progress === this.moveSteps) {
            return;
          }
          this.progress += count;
          var distance = new Vec2(this.distancePerStep.x * this.progress, this.distancePerStep.y * this.progress);
          var calculateSize = new Vec2(this.startPosition.x + distance.x, this.startPosition.y + distance.y);
          var toSize = new Size(calculateSize.x, calculateSize.y);
          var gfx = this.getComponent(Graphics);
          tween(this.uiTransform.contentSize).to(this.moveDuration, toSize, {
            easing: 'cubicOut',
            onUpdate: function onUpdate(contentSize) {
              _this2.uiTransform.setContentSize(contentSize);
              gfx.clear();
              gfx.rect(-contentSize.width * 0.5, 0, contentSize.width, contentSize.height);
              gfx.fill();
            },
            onComplete: function onComplete(contentSize) {
              gfx.clear();
              gfx.rect(-contentSize.width * 0.5, 0, contentSize.width, contentSize.height);
              gfx.fill();
              if (_this2.progress === _this2.moveSteps) {
                _this2.activationParticle.resetSystem();
              }
            }
          }).start();
        };
        _proto.setRoundTypeHandler = function setRoundTypeHandler() {
          var _this$bonusModel;
          if ((_this$bonusModel = this.bonusModel) != null && _this$bonusModel.isBonusAvailable) {
            return;
          }
          this.reset();
        };
        return maskMover;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startPosition", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "endPosition", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "moveDuration", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "moveSteps", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "activationParticle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/menuButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ScrollView, Label, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ScrollView = module.ScrollView;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "6dfd7jEdYpO/I8VUUk5cDA7", "menuButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MenuButton = exports('MenuButton', (_dec = ccclass('MenuButton'), _dec2 = property(ScrollView), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MenuButton, _Component);
        function MenuButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "textLbl", _descriptor2, _assertThisInitialized(_this));
          _this.defaultText = '';
          return _this;
        }
        var _proto = MenuButton.prototype;
        _proto.start = function start() {
          this.scrollView.node.active = false;
          this.defaultText = this.textLbl.string;
        };
        _proto.onClick = function onClick() {
          this.scrollView.node.active = !this.scrollView.node.active;
          this.textLbl.string = this.scrollView.node.active ? 'X' : this.defaultText;
        };
        return MenuButton;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "textLbl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/moveCoins.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './wait.ts', './coinData.ts', './eventSignals.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, wait, CoinTypes, moveCoinSignal;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      wait = module.wait;
    }, function (module) {
      CoinTypes = module.CoinTypes;
    }, function (module) {
      moveCoinSignal = module.moveCoinSignal;
    }],
    execute: function () {
      exports({
        moveFeatureCoins: moveFeatureCoins,
        moveJackpotCoins: moveJackpotCoins
      });
      cclegacy._RF.push({}, "c6c5fKEvdRH151TYFq5711c", "moveCoins", undefined);
      function moveFeatureCoins(_x, _x2, _x3) {
        return _moveFeatureCoins.apply(this, arguments);
      }
      function _moveFeatureCoins() {
        _moveFeatureCoins = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dropPositions, roundType, specificFeatureGods) {
          var featureGods, i;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                featureGods = specificFeatureGods != null ? specificFeatureGods : Object.keys(dropPositions).map(function (key) {
                  return key;
                });
                i = 0;
              case 2:
                if (!(i < featureGods.length)) {
                  _context.next = 9;
                  break;
                }
                moveCoinSignal.dispatch({
                  roundType: roundType,
                  coinData: {
                    coinType: CoinTypes.God,
                    valueType: featureGods[i]
                  },
                  target: dropPositions[featureGods[i]]
                });
                _context.next = 6;
                return wait(100);
              case 6:
                i++;
                _context.next = 2;
                break;
              case 9:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return _moveFeatureCoins.apply(this, arguments);
      }
      function moveJackpotCoins(_x4, _x5, _x6) {
        return _moveJackpotCoins.apply(this, arguments);
      }
      function _moveJackpotCoins() {
        _moveJackpotCoins = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dropPositions, roundType, specificJackpots) {
          var jackpots, i;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                jackpots = specificJackpots != null ? specificJackpots : Object.keys(dropPositions).map(function (key) {
                  return key;
                });
                i = 0;
              case 2:
                if (!(i < jackpots.length)) {
                  _context2.next = 9;
                  break;
                }
                moveCoinSignal.dispatch({
                  roundType: roundType,
                  coinData: {
                    coinType: CoinTypes.Jackpot,
                    valueType: jackpots[i]
                  },
                  target: dropPositions[jackpots[i]]
                });
                _context2.next = 6;
                return wait(100);
              case 6:
                i++;
                _context2.next = 2;
                break;
              case 9:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return _moveJackpotCoins.apply(this, arguments);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/playButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './playfieldModel.ts', './gameplayModel.ts', './bonusModel.ts', './hudModel.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, PlayfieldModel, GameplayModel, BonusModel, HudModel;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      PlayfieldModel = module.PlayfieldModel;
    }, function (module) {
      GameplayModel = module.GameplayModel;
    }, function (module) {
      BonusModel = module.BonusModel;
    }, function (module) {
      HudModel = module.HudModel;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "76c9aK+Be9CGYM5bigFfscp", "playButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PlayButtonComponent = exports('PlayButtonComponent', (_dec = ccclass('PlayButtonComponent'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayButtonComponent, _Component);
        function PlayButtonComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.playfieldModel = null;
          _this.gameplayModel = null;
          _this.bonusModel = null;
          _this.hudModel = null;
          return _this;
        }
        var _proto = PlayButtonComponent.prototype;
        _proto.start = function start() {
          this.gameplayModel = this.node.scene.getComponentInChildren(GameplayModel);
          this.playfieldModel = this.node.scene.getComponentInChildren(PlayfieldModel);
          this.bonusModel = this.node.scene.getComponentInChildren(BonusModel);
          this.hudModel = this.node.scene.getComponentInChildren(HudModel);
        };
        _proto.onClick = function onClick() {
          if (this.playfieldModel.reelsRolling || !this.gameplayModel.canStartRound || this.hudModel.isAutoplayStarted || this.gameplayModel.bonusStarted) {
            return;
          }
          this.gameplayModel.startRound(this.playfieldModel, this.bonusModel);
        };
        return PlayButtonComponent;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/playfieldComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './playfieldModel.ts', './eventSignals.ts', './coinData.ts', './gameData.ts', './gameClasses.ts', './roundTypes.ts', './wait.ts', './gameplayModel.ts', './uniqueId.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, Label, instantiate, Vec3, tween, Color, Component, PlayfieldModel, setReelSignal, setReelsSignal, startRoundSignal, createWinningsSignal, setRoundTypeSignal, playfieldLoadedSignal, freeSpinsMultiplyWinlinesSignal, CoinTypes, gameData, SymbolPrize, FeatureNode, JackpotNode, GodCoins, RoundTypes, wait, GameplayModel, getUniqueId;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Label = module.Label;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      tween = module.tween;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      PlayfieldModel = module.PlayfieldModel;
    }, function (module) {
      setReelSignal = module.setReelSignal;
      setReelsSignal = module.setReelsSignal;
      startRoundSignal = module.startRoundSignal;
      createWinningsSignal = module.createWinningsSignal;
      setRoundTypeSignal = module.setRoundTypeSignal;
      playfieldLoadedSignal = module.playfieldLoadedSignal;
      freeSpinsMultiplyWinlinesSignal = module.freeSpinsMultiplyWinlinesSignal;
    }, function (module) {
      CoinTypes = module.CoinTypes;
    }, function (module) {
      gameData = module.gameData;
    }, function (module) {
      SymbolPrize = module.SymbolPrize;
      FeatureNode = module.FeatureNode;
      JackpotNode = module.JackpotNode;
      GodCoins = module.GodCoins;
    }, function (module) {
      RoundTypes = module.RoundTypes;
    }, function (module) {
      wait = module.wait;
    }, function (module) {
      GameplayModel = module.GameplayModel;
    }, function (module) {
      getUniqueId = module.getUniqueId;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "a5316/tumhGBr0qgDLqj8SV", "playfieldComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PlayfieldComponent = exports('PlayfieldComponent', (_dec = ccclass('PlayfieldComponent'), _dec2 = property([Prefab]), _dec3 = property({
        type: [SymbolPrize]
      }), _dec4 = property(Node), _dec5 = property([Prefab]), _dec6 = property(Prefab), _dec7 = property(Node), _dec8 = property({
        type: [FeatureNode]
      }), _dec9 = property({
        type: [JackpotNode]
      }), _dec10 = property({
        type: [GodCoins]
      }), _dec11 = property(Label), _dec12 = property(Prefab), _dec13 = property(Node), _dec14 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayfieldComponent, _Component);
        function PlayfieldComponent() {
          var _this$setOnRoundType;
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.playfieldModel = null;
          _this.gameplayModel = null;
          _initializerDefineProperty(_this, "symbolPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "symbolPrizes", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "symbolColumns", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "godSymbolPerColumn", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "emptySymbolPerColumn", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "godColumns", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "featureCoinDrops", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jackpotCoinDrops", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "godCoins", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tumbleCountLbl", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winningsLblPrefab", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeSpinsNode", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tumblesNode", _descriptor13, _assertThisInitialized(_this));
          _this.currentWinningsLabel = {};
          _this.roundType = RoundTypes.Normal;
          _this.setReelHandlerBind = _this.setReelHandler.bind(_assertThisInitialized(_this));
          _this.setReelsHandlerBind = _this.setReelsHandler.bind(_assertThisInitialized(_this));
          _this.startRoundHandlerBind = _this.startRoundHandler.bind(_assertThisInitialized(_this));
          _this.createWinningsBind = _this.createWinningsHandler.bind(_assertThisInitialized(_this));
          _this.setRoundTypeBind = _this.setRoundTypeHandler.bind(_assertThisInitialized(_this));
          _this.setOnRoundType = (_this$setOnRoundType = {}, _this$setOnRoundType[RoundTypes.Normal] = function () {
            _this.freeSpinsNode.active = false;
            _this.tumblesNode.active = false; //was true
          }, _this$setOnRoundType[RoundTypes.Bonus] = function () {
            _this.freeSpinsNode.active = false;
            _this.tumblesNode.active = false;
          }, _this$setOnRoundType[RoundTypes.FreeSpin] = function () {
            _this.freeSpinsNode.active = true;
            _this.tumblesNode.active = false;
          }, _this$setOnRoundType);
          return _this;
        }
        var _proto = PlayfieldComponent.prototype;
        _proto.onLoad = function onLoad() {
          this.playfieldModel = this.node.addComponent(PlayfieldModel);
          this.playfieldModel.init(this.tumbleCountLbl, this.symbolPrizes);
          var godTypePerColumn = this.godSymbolPerColumn.map(function (prefab) {
            var _prefab$name$match$, _prefab$name$match;
            return Number((_prefab$name$match$ = (_prefab$name$match = prefab.name.match(/symbol(\d+)_/)) == null ? void 0 : _prefab$name$match[1]) != null ? _prefab$name$match$ : 0);
          });
          this.playfieldModel.createReels(this.symbolColumns, this.godColumns, godTypePerColumn.map(function (id) {
            return gameData.godTypePerColumn[id];
          }));
          for (var i = 0; i < this.playfieldModel.reels.length; i++) {
            this.playfieldModel.reels[i].setNewSymbolCallback = this.setNewSymbol.bind(this);
            this.playfieldModel.reels[i].clearSymbolCallback = this.clearSymbol.bind(this);
          }
          for (var _i = 0; _i < this.playfieldModel.godReels.length; _i++) {
            this.playfieldModel.godReels[_i].setNewSymbolCallback = this.setNewGodSymbol.bind(this);
            this.playfieldModel.godReels[_i].clearSymbolCallback = this.clearSymbol.bind(this);
          }
          setReelSignal.addListener(this.setReelHandlerBind);
          setReelsSignal.addListener(this.setReelsHandlerBind);
          startRoundSignal.addListener(this.startRoundHandlerBind);
          createWinningsSignal.addListener(this.createWinningsBind);
          setRoundTypeSignal.addListener(this.setRoundTypeBind);
          for (var _iterator = _createForOfIteratorHelperLoose(this.featureCoinDrops), _step; !(_step = _iterator()).done;) {
            var featureCoinDrop = _step.value;
            this.playfieldModel.featureCoinDropPositions[featureCoinDrop.type] = featureCoinDrop.node;
          }
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.jackpotCoinDrops), _step2; !(_step2 = _iterator2()).done;) {
            var jackpotCoinDrop = _step2.value;
            this.playfieldModel.jackpotCoinDropPositions[jackpotCoinDrop.type] = jackpotCoinDrop.node;
          }
          playfieldLoadedSignal.dispatch();
        };
        _proto.onDestroy = function onDestroy() {
          setReelSignal.removeListener(this.setReelHandlerBind);
          setReelsSignal.removeListener(this.setReelsHandlerBind);
          startRoundSignal.removeListener(this.startRoundHandlerBind);
          createWinningsSignal.removeListener(this.createWinningsBind);
          setRoundTypeSignal.removeListener(this.setRoundTypeBind);
          for (var i = 0; i < this.playfieldModel.reels.length; i++) {
            this.playfieldModel.reels[i].setNewSymbolCallback = undefined;
            this.playfieldModel.reels[i].clearSymbolCallback = undefined;
          }
          for (var _i2 = 0; _i2 < this.playfieldModel.godReels.length; _i2++) {
            this.playfieldModel.godReels[_i2].setNewSymbolCallback = undefined;
            this.playfieldModel.godReels[_i2].clearSymbolCallback = undefined;
          }
        };
        _proto.start = function start() {
          this.gameplayModel = this.node.scene.getComponentInChildren(GameplayModel);
        };
        _proto.setWinningsLabel = function setWinningsLabel(uniqueId, value) {
          this.currentWinningsLabel[uniqueId].string = '€' + value.toFixed(2);
        };
        _proto.createWinningsHandler = function createWinningsHandler(args) {
          if (args.won <= 0) {
            return;
          }
          this.createWinningsLbl(args.won * 0.01, args.multiplier);
        };
        _proto.createWinningsLbl = function createWinningsLbl(value, multiplier) {
          var _this2 = this;
          var winningsLbl = instantiate(this.winningsLblPrefab);
          winningsLbl.position = new Vec3(0, -40, 0);
          this.node.addChild(winningsLbl);
          var uniqueId = getUniqueId();
          this.currentWinningsLabel[uniqueId] = winningsLbl.getComponent(Label);
          this.setWinningsLabel(uniqueId, value);
          if (multiplier > 1) {
            this.createMultiplierLbl(multiplier, this.currentWinningsLabel[uniqueId].node, 500).then(function () {
              _this2.setWinningsLabel(uniqueId, value * multiplier);
            });
          }
          tween(winningsLbl).to(1.0, {
            position: new Vec3(0, 40, 0)
          }, {
            easing: 'cubicOut',
            onComplete: function onComplete() {
              var startColor = _this2.currentWinningsLabel[uniqueId].color;
              var alphaTarget = {
                alpha: _this2.currentWinningsLabel[uniqueId].color.a
              };
              tween(alphaTarget).to(0.25, {
                alpha: 0
              }, {
                easing: 'cubicOut',
                onUpdate: function onUpdate() {
                  _this2.currentWinningsLabel[uniqueId].color = new Color(startColor.r, startColor.g, startColor.b, alphaTarget.alpha);
                },
                onComplete: function onComplete() {
                  winningsLbl.destroy();
                  delete _this2.currentWinningsLabel[uniqueId];
                }
              }).start();
            }
          }).start();
        };
        _proto.createMultiplierLbl = /*#__PURE__*/function () {
          var _createMultiplierLbl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(value, parent, delay) {
            var multiplierLbl, labelComponent;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return wait(delay);
                case 2:
                  multiplierLbl = instantiate(this.winningsLblPrefab);
                  multiplierLbl.position = new Vec3(0, 0, 0);
                  multiplierLbl.scale = new Vec3(0.5, 0.5, 0.5);
                  parent == null || parent.addChild(multiplierLbl);
                  labelComponent = multiplierLbl.getComponent(Label);
                  labelComponent.string = 'X' + value.toFixed(2);
                  freeSpinsMultiplyWinlinesSignal.dispatch();
                  tween(multiplierLbl).to(1.0, {
                    position: new Vec3(0, 40, 0)
                  }, {
                    easing: 'cubicOut',
                    onComplete: function onComplete() {
                      multiplierLbl.destroy();
                    }
                  }).start();
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function createMultiplierLbl(_x, _x2, _x3) {
            return _createMultiplierLbl.apply(this, arguments);
          }
          return createMultiplierLbl;
        }();
        _proto.setNewSymbol = function setNewSymbol(symbolContainer, value, coinData, isEndResult) {
          var _this$godCoins$find, _this$gameplayModel$j;
          if (symbolContainer.symbolView) {
            var oldSymbol = symbolContainer.symbolView;
            symbolContainer.removeSymbol(oldSymbol);
          }
          var index = value - 1;
          var coin = coinData ? coinData.coinType === CoinTypes.God ? (_this$godCoins$find = this.godCoins.find(function (coin) {
            return coin.type === coinData.valueType;
          })) == null ? void 0 : _this$godCoins$find.prefab : (_this$gameplayModel$j = this.gameplayModel.jackpotCoins.find(function (coin) {
            return coin.type === coinData.valueType;
          })) == null ? void 0 : _this$gameplayModel$j.prefab : undefined;
          var symbolView = instantiate(this.symbolPrefab[index]);
          symbolContainer.addSymbol(symbolView, value, coin, {
            roundType: this.roundType,
            jackpotValue: (coinData == null ? void 0 : coinData.coinType) === CoinTypes.Jackpot ? this.gameplayModel.getJackpotValueByType(coinData == null ? void 0 : coinData.valueType) : undefined
          });
          return Promise.resolve();
        };
        _proto.setNewGodSymbol = function setNewGodSymbol(symbolContainer, value, coinData, isEndResult) {
          var currentIndex = this.playfieldModel.currentRowInGodReelResults[symbolContainer.columnId];
          if (symbolContainer.symbolView) {
            var oldSymbol = symbolContainer.symbolView;
            symbolContainer.removeSymbol(oldSymbol);
          }
          var currentValue = value;
          if (!isEndResult) {
            currentValue = this.playfieldModel.rollingGodReelResults[symbolContainer.columnId].length > currentIndex ? this.playfieldModel.rollingGodReelResults[symbolContainer.columnId][currentIndex].value : 0;
          }
          var prefab = currentValue === 0 ? this.emptySymbolPerColumn : this.godSymbolPerColumn[symbolContainer.columnId];
          var symbolView = instantiate(prefab);
          symbolContainer.addSymbol(symbolView, currentValue);
          this.playfieldModel.currentRowInGodReelResults[symbolContainer.columnId]++;
          return Promise.resolve();
        };
        _proto.clearSymbol = function clearSymbol(symbolContainer) {
          symbolContainer.children.forEach(function (value) {
            symbolContainer.removeSymbol(value);
          });
        };
        _proto.setReelHandler = function setReelHandler(data) {
          var symbolValues = [];
          for (var c = 0; c < data.symbolsColumn.length; c++) {
            // const reelSymbol = data.symbolsColumn[c];
            // if (reelSymbol?.meta?.oldSymbolValue) {
            //     symbolValues.push(reelSymbol.meta.oldSymbolValue);
            // } else {
            symbolValues.push(data.symbolsColumn[c].value);
            // }
          }

          if (data.isGodReel) {
            this.playfieldModel.godReels[data.columnId].setReel(symbolValues, data, true);
          } else {
            this.playfieldModel.reels[data.columnId].setReel(symbolValues, data, true);
          }
        };
        _proto.setReelsHandler = function setReelsHandler(data) {
          for (var i = 0; i < data.symbols.length; i++) {
            var _data$coinsData;
            var symbolsColumn = data.symbols[i];
            setReelSignal.dispatch({
              symbolsColumn: symbolsColumn,
              columnId: i,
              coinData: data == null || (_data$coinsData = data.coinsData) == null ? void 0 : _data$coinsData[i],
              isGodReel: data.isGodReels,
              comesFromMediator: data.comesFromMediator
            });
          }
        };
        _proto.startRoundHandler = function startRoundHandler() {
          this.playfieldModel.createBonusSymbolsWhenRolling();
        };
        _proto.setRoundTypeHandler = function setRoundTypeHandler(data) {
          this.roundType = data.roundType;
          this.setOnRoundType[data.roundType]();
        };
        return PlayfieldComponent;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "symbolPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "symbolPrizes", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "symbolColumns", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "godSymbolPerColumn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "emptySymbolPerColumn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "godColumns", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "featureCoinDrops", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "jackpotCoinDrops", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "godCoins", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "tumbleCountLbl", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "winningsLblPrefab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "freeSpinsNode", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "tumblesNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/playfieldModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './reelService.ts', './reelStatus.ts', './reelsData.ts', './gameData.ts', './array.ts', './reelContext.ts', './eventSignals.ts', './gameplayCalculations.ts', './jackpotTypes.ts', './godFeatureTypes.ts', './arrayUtils.ts', './specialSymbols.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, ReelService, ReelStatus, reelsData, bonusReelsData, gameData, flatMap, ReelContext, setReelsUpdateSignal, changeReelSpinDirectionSignal, setReelsSignal, stopReelSignal, setReelSignal, drawGodsInReels, generateGodReelResult, JackpotTypes, GodFeatureTypes, godFeatureTypeToId, flatten, specialSymbolTypeToId, specialSymbolTypeToGodType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      ReelService = module.ReelService;
    }, function (module) {
      ReelStatus = module.ReelStatus;
    }, function (module) {
      reelsData = module.reelsData;
      bonusReelsData = module.bonusReelsData;
    }, function (module) {
      gameData = module.gameData;
    }, function (module) {
      flatMap = module.flatMap;
    }, function (module) {
      ReelContext = module.ReelContext;
    }, function (module) {
      setReelsUpdateSignal = module.setReelsUpdateSignal;
      changeReelSpinDirectionSignal = module.changeReelSpinDirectionSignal;
      setReelsSignal = module.setReelsSignal;
      stopReelSignal = module.stopReelSignal;
      setReelSignal = module.setReelSignal;
    }, function (module) {
      drawGodsInReels = module.drawGodsInReels;
      generateGodReelResult = module.generateGodReelResult;
    }, function (module) {
      JackpotTypes = module.JackpotTypes;
    }, function (module) {
      GodFeatureTypes = module.GodFeatureTypes;
      godFeatureTypeToId = module.godFeatureTypeToId;
    }, function (module) {
      flatten = module.flatten;
    }, function (module) {
      specialSymbolTypeToId = module.specialSymbolTypeToId;
      specialSymbolTypeToGodType = module.specialSymbolTypeToGodType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "f6832m6lmBBCaY2XURVq4Vs", "playfieldModel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PlayfieldModel = exports('PlayfieldModel', (_dec = ccclass('PlayfieldModel'), _dec2 = property([ReelService]), _dec3 = property([ReelService]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayfieldModel, _Component);
        function PlayfieldModel() {
          var _this$featureCoinDrop, _this$jackpotCoinDrop;
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "reels", _descriptor, _assertThisInitialized(_this));
          // TODO: final project approach:Change bonus reel to seperate objects that just follow the speed of the reel from a column symbol start position. 
          // The bonus reel should just be able to pass by on rolling and stop in the correct position on result.
          _initializerDefineProperty(_this, "godReels", _descriptor2, _assertThisInitialized(_this));
          _this.waitingStopPromise = undefined;
          _this.symbolPrizes = [];
          _this.tumbleCountLbl = null;
          _this.featureCoinDropPositions = (_this$featureCoinDrop = {}, _this$featureCoinDrop[GodFeatureTypes.Athena] = undefined, _this$featureCoinDrop[GodFeatureTypes.Ares] = undefined, _this$featureCoinDrop);
          _this.jackpotCoinDropPositions = (_this$jackpotCoinDrop = {}, _this$jackpotCoinDrop[JackpotTypes.Unreal] = undefined, _this$jackpotCoinDrop[JackpotTypes.Divine] = undefined, _this$jackpotCoinDrop[JackpotTypes.Heroic] = undefined, _this$jackpotCoinDrop[JackpotTypes.Warlord] = undefined, _this$jackpotCoinDrop[JackpotTypes.Mythic] = undefined, _this$jackpotCoinDrop[JackpotTypes.Legendary] = undefined, _this$jackpotCoinDrop[JackpotTypes.Athena] = undefined, _this$jackpotCoinDrop[JackpotTypes.Ares] = undefined, _this$jackpotCoinDrop[JackpotTypes.Godlike] = undefined, _this$jackpotCoinDrop);
          _this.showGodInRollingReel = [];
          _this.rollingGodReelResults = [];
          _this.currentRowInGodReelResults = [];
          _this.setReelsUpdateHandlerBind = _this.setReelsUpdateHandler.bind(_assertThisInitialized(_this));
          _this.changeReelSpinDirectionHandlerBind = _this.changeReelSpinDirectionHandler.bind(_assertThisInitialized(_this));
          return _this;
        }
        var _proto = PlayfieldModel.prototype;
        _proto.setMultiplierFromTumbleCount = function setMultiplierFromTumbleCount(tumbleCount) {
          var keys = Object.keys(gameData.bonus.tumble.multiplierPerCount).map(Number);
          var closestKey = keys.reduce(function (prev, curr) {
            return Math.abs(curr - tumbleCount) < Math.abs(prev - tumbleCount) ? curr : prev;
          });
          return gameData.bonus.tumble.multiplierPerCount[closestKey];
        };
        _proto.init = function init(tumbleCountLbl, symbolPrizes) {
          this.tumbleCountLbl = tumbleCountLbl;
          this.symbolPrizes = symbolPrizes;
        };
        _proto.onLoad = function onLoad() {
          setReelsUpdateSignal.addListener(this.setReelsUpdateHandlerBind);
          changeReelSpinDirectionSignal.addListener(this.changeReelSpinDirectionHandlerBind);
        };
        _proto.onDestroy = function onDestroy() {
          setReelsUpdateSignal.removeListener(this.setReelsUpdateHandlerBind);
          changeReelSpinDirectionSignal.removeListener(this.changeReelSpinDirectionHandlerBind);
        };
        _proto.getSymbolWinnings = function getSymbolWinnings(symbolValue, winlineCount, stake) {
          var multiplier = this.getMultiplier(symbolValue, winlineCount);
          var won = stake * multiplier;
          return won;
        };
        _proto.getMultiplier = function getMultiplier(symbolValue, winlineCount) {
          var _prize$getMultiplier;
          var prize = this.symbolPrizes.find(function (item) {
            return item.symbolValue === symbolValue;
          });
          return (_prize$getMultiplier = prize == null ? void 0 : prize.getMultiplier(winlineCount)) != null ? _prize$getMultiplier : 0;
        };
        _proto.setReelsUpdateHandler = function setReelsUpdateHandler(data) {
          var _this2 = this;
          this.reels.forEach(function (reel) {
            reel.shouldUpdate = data.enable;
            reel.reelStopCallback = _this2.setReelResult.bind(_this2);
          });
          this.godReels.forEach(function (reel) {
            reel.shouldUpdate = data.enable;
            reel.reelStopCallback = _this2.setGodReelResult.bind(_this2);
          });
        };
        _proto.changeReelSpinDirectionHandler = function changeReelSpinDirectionHandler(args) {
          this.reels.forEach(function (reel) {
            reel.reverse = args.reverse;
          });
          this.godReels.forEach(function (reel) {
            reel.reverse = args.reverse;
            reel.isBonusReel = reel.reelModel.isBonusReel;
            reel.bonusValue = reel.reelModel.bonusValue;
          });
        };
        _proto.isReversedReels = function isReversedReels() {
          return this.reels.every(function (reel) {
            return reel.reverse;
          });
        };
        _proto.setReelResult = /*#__PURE__*/function () {
          var _setReelResult = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(columnId) {
            var reelResult, coinData;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  stopReelSignal.dispatch({
                    columnId: columnId,
                    useTween: true,
                    reverse: this.reels[columnId].reverse
                  });
                  reelResult = this.reels[columnId].reelModel.result;
                  coinData = this.reels[columnId].reelModel.resultCoins;
                  setReelSignal.dispatch({
                    symbolsColumn: reelResult,
                    columnId: columnId,
                    coinData: coinData,
                    comesFromMediator: true
                  });
                  if (this.allReelsStopped) {
                    this.reels.forEach(function (reel) {
                      return reel.shouldUpdate = false;
                    });
                  }
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function setReelResult(_x) {
            return _setReelResult.apply(this, arguments);
          }
          return setReelResult;
        }();
        _proto.setGodReelResult = /*#__PURE__*/function () {
          var _setGodReelResult = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(columnId) {
            var reelResult;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  stopReelSignal.dispatch({
                    columnId: columnId,
                    useTween: true,
                    reverse: this.godReels[columnId].reverse,
                    isGodReel: true
                  });
                  reelResult = this.godReels[columnId].reelModel.result;
                  setReelSignal.dispatch({
                    symbolsColumn: reelResult,
                    columnId: columnId,
                    comesFromMediator: true,
                    isGodReel: true
                  });
                  if (this.allBonusReelsStopped) {
                    this.godReels.forEach(function (reel) {
                      return reel.shouldUpdate = false;
                    });
                  }
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function setGodReelResult(_x2) {
            return _setGodReelResult.apply(this, arguments);
          }
          return setGodReelResult;
        }();
        _proto.updateReelsResultWithGodFeature = function updateReelsResultWithGodFeature(activatedGodFeatureTypes) {
          var _this3 = this;
          var symbols = this.reels.map(function (reel) {
            return structuredClone(reel.reelModel.result);
          });
          Object.entries(activatedGodFeatureTypes).forEach(function (_ref) {
            var type = _ref[0],
              count = _ref[1];
            for (var i = 0; i < count; i++) {
              _this3.updateRandomValueToSpecialSymbol(symbols, type);
              // this.updateRandomValueToSpecialSymbolSplit(symbols, type as SpecialSymbolTypes);
            }
          });

          setReelsSignal.dispatch({
            symbols: symbols,
            comesFromMediator: true
          });
          return symbols;
        }

        // Give special symbol to any reel
        ;

        _proto.updateRandomValueToSpecialSymbol = function updateRandomValueToSpecialSymbol(symbols, specialSymbolType) {
          var visibleSymbols = this.reels.map(function (reel) {
            return reel.reelModel.visibleResult;
          });
          var flattenColumns = flatten(visibleSymbols).filter(function (item) {
            return item !== undefined;
          });
          var noWinValue = this.getRandomNoWinValue(flattenColumns);
          var data = [];
          symbols.forEach(function (column, col) {
            column.forEach(function (symbol, row) {
              var invisibleCount = reelsData.playFieldDimensions.rows[col].total - reelsData.playFieldDimensions.rows[col].visible;
              var startCount = invisibleCount * 0.5;
              var endCount = column.length - 1 - startCount;
              if (row >= startCount && row <= endCount) {
                if (symbol.value === noWinValue) {
                  data.push({
                    columnId: col,
                    rowId: row
                  });
                }
              }
            });
          });
          if (data.length === 0) {
            return;
          }
          var randomSymbol = data[Math.floor(Math.random() * data.length)];
          var symbol = structuredClone(symbols[randomSymbol.columnId][randomSymbol.rowId]);
          symbol.meta = {
            oldSymbolValue: symbol.value
          };
          symbol.value = specialSymbolTypeToId[specialSymbolType];
          symbols[randomSymbol.columnId][randomSymbol.rowId] = symbol;
        }

        // Give special symbol to respective god reels
        ;

        _proto.updateRandomValueToSpecialSymbolSplit = function updateRandomValueToSpecialSymbolSplit(symbols, specialSymbolType) {
          var godType = specialSymbolTypeToGodType[specialSymbolType];
          var godTypePerColumn = gameData.godTypePerColumn;
          var columnIndices = godTypePerColumn.map(function (item, index) {
            if (item === godType) {
              return index;
            }
            return undefined;
          }).filter(function (item) {
            return item !== undefined;
          });
          var visibleSymbols = this.reels.map(function (reel) {
            return reel.reelModel.visibleResult;
          });
          var godColumns = flatten(visibleSymbols.map(function (reel, col) {
            if (columnIndices.includes(col)) {
              return reel;
            }
            return undefined;
          })).filter(function (item) {
            return item !== undefined;
          });
          var noWinValue = this.getRandomNoWinValue(godColumns);
          var data = [];
          symbols.forEach(function (column, col) {
            column.forEach(function (symbol, row) {
              var invisibleCount = reelsData.playFieldDimensions.rows[col].total - reelsData.playFieldDimensions.rows[col].visible;
              var startCount = invisibleCount * 0.5;
              var endCount = column.length - 1 - startCount;
              if (row >= startCount && row <= endCount) {
                if (symbol.value === noWinValue && columnIndices.includes(col)) {
                  data.push({
                    columnId: col,
                    rowId: row
                  });
                }
              }
            });
          });
          var randomSymbol = data[Math.floor(Math.random() * data.length)];
          var symbol = structuredClone(symbols[randomSymbol.columnId][randomSymbol.rowId]);
          symbol.meta = {
            oldSymbolValue: symbol.value
          };
          symbol.value = specialSymbolTypeToId[specialSymbolType];
          symbols[randomSymbol.columnId][randomSymbol.rowId] = symbol;
        };
        _proto.getRandomNoWinValue = function getRandomNoWinValue(symbols) {
          var symbolCounts = symbols.reduce(function (acc, symbol) {
            if (symbol.value === specialSymbolTypeToId.wild || symbol.value === specialSymbolTypeToId.multiplier) {
              return acc;
            }
            var count = acc.get(symbol.value) || 0;
            acc.set(symbol.value, count + 1);
            return acc;
          }, new Map());
          var filteredValues = [];
          for (var _iterator = _createForOfIteratorHelperLoose(symbolCounts.entries()), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              value = _step$value[0],
              count = _step$value[1];
            if (count < gameData.winlines.minimumCount) {
              filteredValues.push(value);
            }
          }
          var randomValue = filteredValues[Math.floor(Math.random() * filteredValues.length)];
          return randomValue;
        };
        _proto.setActiveSpecialSymbols = function setActiveSpecialSymbols(specialSymbols) {
          this.reels.forEach(function (reel) {
            reel.reelModel.activeSpecialSymbols = specialSymbols;
          });
        };
        _proto.hasWildInColumn = function hasWildInColumn(columnIndex) {
          return this.reels[columnIndex].getVisibleSymbolValues(specialSymbolTypeToId.wild).length > 0;
        };
        _proto.getMultiplierTotal = function getMultiplierTotal() {
          var symbols = this.visibleSymbols.filter(function (symbol) {
            return symbol.symbolModel.value === specialSymbolTypeToId.multiplier;
          });
          var totalMultiplier = symbols.reduce(function (acc, symbol) {
            var symbolMultiplier = symbol.symbolModel.multiplier || 0;
            return acc + symbolMultiplier;
          }, 0);
          return Math.max(totalMultiplier, 1);
        }

        // public get hasWildTension(): boolean {
        //     return this.reels.filter((column, cIndex) => column.reelModel.visibleResult.some((row) => row.value === gameData!.specialSymbolValues.wild && cIndex < reelsData!.playFieldDimensions.columns - 1)).length >= gameData!.tension.count.wild;
        // }

        // public get hasAthenaTension(): boolean {
        //     return this.reels.filter((column, cIndex) => column.reelModel.visibleResult.some((row) => row.value === gameData!.specialSymbolValues.athena && cIndex < reelsData!.playFieldDimensions.columns - 1)).length >= 1;
        // }

        // public get hasAresTension(): boolean {
        //     return this.reels.filter((column, cIndex) => column.reelModel.visibleResult.some((row) => row.value === gameData!.specialSymbolValues.ares && cIndex < reelsData!.playFieldDimensions.columns - 1)).length >= 1;
        // }

        // public get hasAnyTension(): boolean {
        //     return this.hasWildTension || this.hasBonusTension;
        // }

        // public get hasBonusTension(): boolean {
        //     return this.hasAthenaTension || this.hasAresTension;[])
        // }
        ;

        _proto.getIsWildSymbolInWin = function getIsWildSymbolInWin(symbolModel, winData) {
          if (symbolModel.value !== specialSymbolTypeToId.wild) {
            return false;
          }
          return winData.filter(function (win) {
            return symbolModel.symbolPosition.colId <= win.symbols.length - 1;
          }).length > 0;
        };
        _proto.createReels = function createReels(columns, bonusColumns, godTypePerColumn) {
          for (var i = 0; i < reelsData.playFieldDimensions.columns; i++) {
            this.reels.push(this.createReel({
              reelsData: reelsData,
              columnId: i,
              columns: columns
            }));
            var godType = godTypePerColumn[i];
            this.godReels.push(this.createReel({
              reelsData: bonusReelsData,
              columnId: i,
              columns: bonusColumns,
              isGodReel: true,
              godType: godType
            }));
          }
        };
        _proto.createReel = function createReel(config) {
          var context = new ReelContext();
          context.init(config);
          config.columns.addChild(context);
          return context.service;
        };
        _proto.reset = function reset() {
          this.reels.forEach(function (reel) {
            reel.resetReel();
          });
          this.godReels.forEach(function (reel) {
            reel.resetReel();
          });
        };
        _proto.setSymbols = function setSymbols(symbols, coinsResult, isRespinReels) {
          for (var r = 0; r < symbols.length; r++) {
            var symbol = symbols[r];
            if (symbol.length >= reelsData.playFieldDimensions.rows[r].visible) {
              var _coinsResult$r, _isRespinReels$r;
              this.reels[r].reelModel.result = symbol;
              this.reels[r].reelModel.resultCoins = (_coinsResult$r = coinsResult == null ? void 0 : coinsResult[r]) != null ? _coinsResult$r : this.reels[r].reelModel.resultCoins;
              this.reels[r].reelModel.isRespin = (_isRespinReels$r = isRespinReels == null ? void 0 : isRespinReels[r]) != null ? _isRespinReels$r : false;
            }
          }
        };
        _proto.setGodSymbols = function setGodSymbols(symbols, isRespinReels) {
          for (var r = 0; r < symbols.length; r++) {
            var symbol = symbols[r];
            if (symbol.length >= bonusReelsData.playFieldDimensions.rows[r].visible) {
              var _isRespinReels$r2;
              this.godReels[r].reelModel.result = symbol;
              this.godReels[r].reelModel.isRespin = (_isRespinReels$r2 = isRespinReels == null ? void 0 : isRespinReels[r]) != null ? _isRespinReels$r2 : false;
            }
          }
        };
        _proto.setResultOfReel = function setResultOfReel(result, columnId) {
          if (result.length < reelsData.playFieldDimensions.rows[columnId].total) {
            return;
          }
          for (var i = 0; i < result.length; i++) {
            this.reels[columnId].reelModel.result[i] = {
              value: result[i]
            };
          }
        };
        _proto.setBonusResultOfReel = function setBonusResultOfReel(result, columnId) {
          if (result.length < bonusReelsData.playFieldDimensions.rows[columnId].total) {
            return;
          }
          for (var i = 0; i < result.length; i++) {
            this.godReels[columnId].reelModel.result[i] = {
              value: result[i]
            };
          }
        };
        _proto.getSymbolIdsFromWinline = function getSymbolIdsFromWinline(winline) {
          var wIndex = 0;
          var symbols = [];
          while (wIndex < winline.length) {
            var rowIndex = winline[wIndex];
            var s = this.getSymbolViewByPosition(wIndex, rowIndex, true);
            wIndex++;
            if (s) {
              symbols.push(s.symbolModel.symbolId);
            }
          }
          return symbols;
        };
        _proto.getSymbolViewByPosition = function getSymbolViewByPosition(col, row, visibleOnly) {
          if (visibleOnly === void 0) {
            visibleOnly = false;
          }
          if (col >= this.reels.length || col < 0) {
            return undefined;
          }
          var column = visibleOnly ? this.reels[col].reelModel.visibleSymbols : this.reels[col].reelModel.symbols;
          if (row >= column.length || row < 0) {
            return undefined;
          }
          //If there was a wild on this column, return that. The wild is always expanded to the whole column.
          var wildSymbol = column.find(function (item) {
            return item.symbolModel.value === specialSymbolTypeToId.wild;
          });
          return wildSymbol != null ? wildSymbol : column[row];
        };
        _proto.getSymbolViewBySymbolId = function getSymbolViewBySymbolId(symbolIds) {
          var _this4 = this;
          var symbolViews = [];
          var _loop = function _loop() {
            var symbolId = _step2.value;
            _this4.reels.forEach(function (reel) {
              var symbol = reel.reelModel.visibleSymbols.find(function (s) {
                return s.symbolModel.symbolId === symbolId;
              });
              if (symbol) {
                symbolViews.push(symbol);
              }
            });
          };
          for (var _iterator2 = _createForOfIteratorHelperLoose(symbolIds), _step2; !(_step2 = _iterator2()).done;) {
            _loop();
          }
          return symbolViews;
        };
        _proto.getSymbolContainerBySymbolId = function getSymbolContainerBySymbolId(symbolIds) {
          var _this5 = this;
          var symbolContainer = [];
          var _loop2 = function _loop2() {
            var symbolId = _step3.value;
            _this5.reels.forEach(function (reel) {
              var symbol = reel.reelModel.visibleSymbols.find(function (s) {
                return s.symbolModel.symbolId === symbolId;
              });
              if (symbol) {
                symbolContainer.push(symbol);
              }
            });
          };
          for (var _iterator3 = _createForOfIteratorHelperLoose(symbolIds), _step3; !(_step3 = _iterator3()).done;) {
            _loop2();
          }
          return symbolContainer;
        };
        _proto.resetRollingBonusReel = function resetRollingBonusReel() {
          this.currentRowInGodReelResults = Array(this.godReels.length).fill(0);
          this.rollingGodReelResults = [];
          this.showGodInRollingReel = [];
        };
        _proto.createBonusSymbolsWhenRolling = function createBonusSymbolsWhenRolling() {
          this.resetRollingBonusReel();
          var bonusSymbols = drawGodsInReels({
            columnCount: this.godReels.length,
            excludeColumnIndices: [3]
          });
          for (var i = 0; i < bonusSymbols.length; i++) {
            var _godFeatureTypeToId$g;
            var canShowBonusInReel = bonusSymbols[i];
            this.showGodInRollingReel.push(canShowBonusInReel);
            var bonusValue = canShowBonusInReel ? (_godFeatureTypeToId$g = godFeatureTypeToId[gameData.godTypePerColumn[i]]) != null ? _godFeatureTypeToId$g : 0 : 0;
            var result = generateGodReelResult({
              columnId: i,
              godValue: bonusValue,
              reelsData: bonusReelsData,
              hasGodColumn: canShowBonusInReel
            });
            this.rollingGodReelResults.push(result);
          }
        }

        // public createCoinsToSymbols(jackpotCoins: Prefab[], godCoins: Record<GodFeatureTypes, Prefab>): void {
        //     // TODO: add coins to symbols for columns with bonus symbols
        //     const jackpotCoinsResult = createJackpotCoinsResult({ jackpotTypes: [JackpotTypes.Unreal, JackpotTypes.Divine, JackpotTypes.Heroic, JackpotTypes.Warlord], reelsData: bonusReelsData });
        //     for(let col = 0; col < this.reels.length; col++) {
        //         const godCoinsResult = createGodCoinsResult({ columnId: col, bonusValue: gameData.godTypePerColumn[col], reelsData: bonusReelsData });
        //         const reel = this.reels[col];
        //         const reelResultCoins: CoinData[] = [];
        //         reel.reelModel.visibleResult.forEach((symbol, row) => {
        //             // const godCoinValue = godCoinsResult[row].value;
        //             // if (godCoinValue > 0) {
        //             //     const coin = godCoins[godCoinValue];
        //             //     if (coin) {
        //             //         symbol.addChild(coin);
        //             //     }
        //             // }

        //             // const jackpotCoinType = jackpotCoinsResult[col][row].jackpotType;
        //             // if (jackpotCoinType && godCoinValue === 0) {
        //             //     const coin = jackpotCoins[jackpotCoinType];
        //             //     if (coin) {
        //             //         symbol.addChild(coin);
        //             //     }
        //             // }

        //             const godCoinValue = godCoinsResult[row].value;
        //             if (godCoinValue > 0) {
        //                 reelResultCoins.push({ type: CoinTypes.God, value: godCoinValue });
        //             }
        //             const jackpotCoinType = jackpotCoinsResult[col][row].jackpotType;
        //             if (jackpotCoinType && godCoinValue === 0) {
        //                 reelResultCoins.push({ type: CoinTypes.Jackpot, value: jackpotCoinType });
        //             }
        //         });
        //         reel.reelModel.resultCoins = reelResultCoins;
        //     }
        // }
        ;

        _createClass(PlayfieldModel, [{
          key: "tumbleTotalCount",
          get: function get() {
            return Number(this.tumbleCountLbl.string);
          },
          set: function set(value) {
            this.tumbleCountLbl.string = value.toFixed(0);
          }
        }, {
          key: "visibleResults",
          get: function get() {
            return this.reels.map(function (reel) {
              return reel.reelModel.visibleResult;
            });
          }
        }, {
          key: "totalResults",
          get: function get() {
            return this.reels.map(function (reel) {
              return reel.reelModel.result;
            });
          }
        }, {
          key: "visibleSymbolContainers",
          get: function get() {
            return this.reels.map(function (reel) {
              return reel.reelModel.visibleSymbols;
            });
          }
        }, {
          key: "totalSybolContainers",
          get: function get() {
            return this.reels.map(function (reel) {
              return reel.reelModel.symbols;
            });
          }
        }, {
          key: "tensionCount",
          get: function get() {
            return this.reels.filter(function (reel) {
              return reel.reelModel.hasTension;
            }).length;
          }
        }, {
          key: "reelsRolling",
          get: function get() {
            return this.reels.some(function (reel) {
              return reel.reelModel.status === ReelStatus.Rolling || reel.reelModel.status === ReelStatus.Started;
            });
          }
        }, {
          key: "allReelsStopped",
          get: function get() {
            return this.reels.every(function (item) {
              return item.reelModel.status === ReelStatus.Stopped;
            });
          }
        }, {
          key: "allBonusReelsStopped",
          get: function get() {
            return this.godReels.every(function (item) {
              return item.reelModel.status === ReelStatus.Stopped;
            });
          }
        }, {
          key: "reelsStarted",
          get: function get() {
            return this.reels.some(function (item) {
              return item.reelModel.status === ReelStatus.Started || item.reelModel.status === ReelStatus.Rolling;
            });
          }
        }, {
          key: "hasWildCoins",
          get: function get() {
            return this.reels.some(function (reel) {
              return reel.reelModel.hasWildCoins;
            });
          }
        }, {
          key: "hasMultiplierCoins",
          get: function get() {
            return this.reels.some(function (reel) {
              return reel.reelModel.hasMultiplierCoins;
            });
          }
        }, {
          key: "godCoinDrawn",
          get: function get() {
            var godFeatureDrawn = [];
            if (this.hasWildCoins) {
              godFeatureDrawn.push(GodFeatureTypes.Ares);
            }
            if (this.hasMultiplierCoins) {
              godFeatureDrawn.push(GodFeatureTypes.Athena);
            }
            return godFeatureDrawn;
          }
        }, {
          key: "hasVisibleWildSymbols",
          get: function get() {
            return this.visibleWildSymbols.length > 0;
          }
        }, {
          key: "visibleWildSymbols",
          get: function get() {
            return flatMap(this.reels, function (reel) {
              return reel.getVisibleSymbolValues(specialSymbolTypeToId.wild);
            });
          }
        }, {
          key: "hasVisibleMultiplierSymbols",
          get: function get() {
            return this.visibleMultiplierSymbols.length > 0;
          }
        }, {
          key: "visibleMultiplierSymbols",
          get: function get() {
            return flatMap(this.reels, function (reel) {
              return reel.getVisibleSymbolValues(specialSymbolTypeToId.multiplier);
            });
          }
        }, {
          key: "visibleSymbols",
          get: function get() {
            return flatMap(this.reels, function (reel) {
              return reel.visibleSymbols;
            });
          }
        }, {
          key: "invisibleSymbols",
          get: function get() {
            return flatMap(this.reels, function (reel) {
              return reel.invisibleSymbols;
            });
          }
        }]);
        return PlayfieldModel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "reels", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "godReels", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/playfieldUpdate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './eventSignals.ts', './wait.ts', './reelsData.ts', './gameData.ts', './gameplayCalculations.ts', './coinData.ts', './godFeatureTypes.ts', './jackpotTypes.ts', './roundTypes.ts', './specialSymbols.ts', './bonusSideType.ts', './moveCoins.ts', './resolvablePromise.ts', './array.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Vec3, godFeatureResetSignal, setRoundTypeSignal, spinReelSignal, startRoundSignal, setReelsUpdateSignal, setReelsSignal, showReelResultSignal, freeSpinsActivateAnimationSignal, animateGodSymbolSignal, createWinningsSignal, increaseTumbleCountSignal, tumbleSymbolsSignal, popSymbolsSignal, respinGodsSignal, respinTriggerSignal, bonusResetRollsSignal, bonusStopRollsSignal, bonusStartRollsSignal, wait, reelsData, bonusReelsData, gameData, generateRandomSymbols, drawGodsInReels, generateJackpotCoinsResultTwo, addGodCoinsToCoinsResult, getGodReelsResult, generateGodReelsResult, drawRandomGodFeatureActivation, randomizer, CoinTypes, GodFeatureTypes, godFeatureTypeToId, godToJackpotType, RoundTypes, specialSymbolTypeToGodType, specialSymbolTypeToId, SpecialSymbolTypes, BonusSideType, moveJackpotCoins, moveFeatureCoins, ResolvablePromise, shuffle, flatMap;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      godFeatureResetSignal = module.godFeatureResetSignal;
      setRoundTypeSignal = module.setRoundTypeSignal;
      spinReelSignal = module.spinReelSignal;
      startRoundSignal = module.startRoundSignal;
      setReelsUpdateSignal = module.setReelsUpdateSignal;
      setReelsSignal = module.setReelsSignal;
      showReelResultSignal = module.showReelResultSignal;
      freeSpinsActivateAnimationSignal = module.freeSpinsActivateAnimationSignal;
      animateGodSymbolSignal = module.animateGodSymbolSignal;
      createWinningsSignal = module.createWinningsSignal;
      increaseTumbleCountSignal = module.increaseTumbleCountSignal;
      tumbleSymbolsSignal = module.tumbleSymbolsSignal;
      popSymbolsSignal = module.popSymbolsSignal;
      respinGodsSignal = module.respinGodsSignal;
      respinTriggerSignal = module.respinTriggerSignal;
      bonusResetRollsSignal = module.bonusResetRollsSignal;
      bonusStopRollsSignal = module.bonusStopRollsSignal;
      bonusStartRollsSignal = module.bonusStartRollsSignal;
    }, function (module) {
      wait = module.wait;
    }, function (module) {
      reelsData = module.reelsData;
      bonusReelsData = module.bonusReelsData;
    }, function (module) {
      gameData = module.gameData;
    }, function (module) {
      generateRandomSymbols = module.generateRandomSymbols;
      drawGodsInReels = module.drawGodsInReels;
      generateJackpotCoinsResultTwo = module.generateJackpotCoinsResultTwo;
      addGodCoinsToCoinsResult = module.addGodCoinsToCoinsResult;
      getGodReelsResult = module.getGodReelsResult;
      generateGodReelsResult = module.generateGodReelsResult;
      drawRandomGodFeatureActivation = module.drawRandomGodFeatureActivation;
      randomizer = module.randomizer;
    }, function (module) {
      CoinTypes = module.CoinTypes;
    }, function (module) {
      GodFeatureTypes = module.GodFeatureTypes;
      godFeatureTypeToId = module.godFeatureTypeToId;
    }, function (module) {
      godToJackpotType = module.godToJackpotType;
    }, function (module) {
      RoundTypes = module.RoundTypes;
    }, function (module) {
      specialSymbolTypeToGodType = module.specialSymbolTypeToGodType;
      specialSymbolTypeToId = module.specialSymbolTypeToId;
      SpecialSymbolTypes = module.SpecialSymbolTypes;
    }, function (module) {
      BonusSideType = module.BonusSideType;
    }, function (module) {
      moveJackpotCoins = module.moveJackpotCoins;
      moveFeatureCoins = module.moveFeatureCoins;
    }, function (module) {
      ResolvablePromise = module.ResolvablePromise;
    }, function (module) {
      shuffle = module.shuffle;
      flatMap = module.flatMap;
    }],
    execute: function () {
      exports('playfieldUpdate', playfieldUpdate);
      cclegacy._RF.push({}, "512316B0etHfbb/hkqCM9IE", "playfieldUpdate", undefined);
      function playfieldUpdate(_x, _x2) {
        return _playfieldUpdate.apply(this, arguments);
      }
      function _playfieldUpdate() {
        _playfieldUpdate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(reverse, models) {
          var spinPerColumn, _drawEndResults, symbols, coinsResult, tumbleData, _iterator2, _step2, specialType;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                //Start round
                models.playfield.tumbleTotalCount = 0;
                models.hud.won = 0;
                models.playfield.waitingStopPromise = new ResolvablePromise();

                // Spin reels
                spinPerColumn = Array(reelsData.playFieldDimensions.columns).fill(true);
                _context.next = 6;
                return spinReels(reverse, models, {
                  useRollToCenter: models.hud.isRollToCenterEnabled,
                  spinPerColumn: spinPerColumn
                });
              case 6:
                _context.next = 8;
                return checkFreeSpinsActivation(models);
              case 8:
                _context.next = 10;
                return wait(reelsData.rollTime.normal);
              case 10:
                //Draw end results
                _drawEndResults = drawEndResults(models), symbols = _drawEndResults.symbols, coinsResult = _drawEndResults.coinsResult; //Stop reels & show end result
                _context.next = 13;
                return stopReels(models, {
                  useRollToCenter: models.hud.isRollToCenterEnabled,
                  spinPerColumn: spinPerColumn
                });
              case 13:
                _context.next = 15;
                return animateCoins(symbols, coinsResult, models);
              case 15:
                _context.next = 17;
                return handleRandomSpecials(models);
              case 17:
                // Tumble symbols
                tumbleData = getTumbleSymbolData(models.playfield.totalResults, reverse, models);
                _context.next = 20;
                return handleSymbolTumbles(tumbleData, reverse, models);
              case 20:
                if (!(models.playfield.tumbleTotalCount >= gameData.respin.possibleCount && models.playfield.tumbleTotalCount < gameData.bonus.tumble.minimumCount || models.hud.isRespinCheat)) {
                  _context.next = 23;
                  break;
                }
                _context.next = 23;
                return handleRespinTrigger(models, reverse);
              case 23:
                if (models.gameplay.roundType === RoundTypes.Normal && models.playfield.tumbleTotalCount >= gameData.bonus.tumble.minimumCount) {
                  models.bonus.isBonusAvailable = true;
                }
                if (!(models.gameplay.hasAnySpecialActivated && models.gameplay.roundType !== RoundTypes.FreeSpin)) {
                  _context.next = 27;
                  break;
                }
                setRoundTypeSignal.dispatch({
                  roundType: RoundTypes.FreeSpin
                });
                return _context.abrupt("return");
              case 27:
                if (!(models.gameplay.roundType === RoundTypes.FreeSpin)) {
                  _context.next = 37;
                  break;
                }
                if (!(models.gameplay.freeSpinCount === models.gameplay.freeSpinLeft)) {
                  _context.next = 34;
                  break;
                }
                //Reset all freespin data
                for (_iterator2 = _createForOfIteratorHelperLoose(models.gameplay.activatedSpecialsList); !(_step2 = _iterator2()).done;) {
                  specialType = _step2.value;
                  godFeatureResetSignal.dispatch({
                    feature: specialSymbolTypeToGodType[specialType]
                  });
                }
                setRoundTypeSignal.dispatch({
                  roundType: RoundTypes.Normal
                });
                models.gameplay.bonusStarted = false;
                _context.next = 37;
                break;
              case 34:
                models.gameplay.startRound(models.playfield, models.bonus);
                models.gameplay.bonusStarted = true;
                return _context.abrupt("return");
              case 37:
                if (!models.bonus.isBonusAvailable) {
                  _context.next = 40;
                  break;
                }
                _context.next = 40;
                return playBonusRound({
                  playfield: models.playfield,
                  bonus: models.bonus,
                  hud: models.hud,
                  gameplay: models.gameplay
                }, models.playfield.tumbleTotalCount);
              case 40:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return _playfieldUpdate.apply(this, arguments);
      }
      function spinReels(_x3, _x4, _x5) {
        return _spinReels.apply(this, arguments);
      }
      function _spinReels() {
        _spinReels = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(reverse, models, options) {
          var i, splitLength, promises;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                startRoundSignal.dispatch(models.gameplay.roundType);
                setReelsUpdateSignal.dispatch({
                  enable: true
                });
                if (options != null && options.useRollToCenter) {
                  _context3.next = 16;
                  break;
                }
                i = 0;
              case 4:
                if (!(i < models.playfield.reels.length)) {
                  _context3.next = 14;
                  break;
                }
                if (options != null && options.spinPerColumn[i]) {
                  _context3.next = 7;
                  break;
                }
                return _context3.abrupt("continue", 11);
              case 7:
                _context3.next = 9;
                return wait((i + 1) * 20);
              case 9:
                spinReelSignal.dispatch({
                  columnId: i,
                  useTween: true,
                  reverse: reverse
                });
                spinReelSignal.dispatch({
                  columnId: i,
                  useTween: true,
                  reverse: reverse,
                  isGodReel: true
                });
              case 11:
                i++;
                _context3.next = 4;
                break;
              case 14:
                _context3.next = 27;
                break;
              case 16:
                splitLength = Math.floor(models.playfield.reels.length / 2);
                promises = [];
                promises.push(new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
                  var _i3, reversedIndex;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _i3 = 0;
                      case 1:
                        if (!(_i3 < splitLength)) {
                          _context2.next = 16;
                          break;
                        }
                        reversedIndex = models.playfield.reels.length - 1 - _i3; // Left to middle
                        if (!(!(options != null && options.spinPerColumn) || options != null && options.spinPerColumn[_i3])) {
                          _context2.next = 8;
                          break;
                        }
                        _context2.next = 6;
                        return wait((_i3 + 1) * 50);
                      case 6:
                        spinReelSignal.dispatch({
                          columnId: _i3,
                          useTween: true,
                          reverse: reverse
                        });
                        spinReelSignal.dispatch({
                          columnId: _i3,
                          useTween: true,
                          reverse: reverse,
                          isGodReel: true
                        });
                      case 8:
                        if (!(!(options != null && options.spinPerColumn) || options != null && options.spinPerColumn[reversedIndex])) {
                          _context2.next = 13;
                          break;
                        }
                        _context2.next = 11;
                        return wait((_i3 + 1) * 50);
                      case 11:
                        spinReelSignal.dispatch({
                          columnId: reversedIndex,
                          useTween: true,
                          reverse: reverse
                        });
                        spinReelSignal.dispatch({
                          columnId: reversedIndex,
                          useTween: true,
                          reverse: reverse,
                          isGodReel: true
                        });
                      case 13:
                        _i3++;
                        _context2.next = 1;
                        break;
                      case 16:
                        resolve();
                      case 17:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }))));

                // Middle
                _context3.next = 21;
                return Promise.all(promises);
              case 21:
                if (!(models.playfield.reels.length % 2 !== 0)) {
                  _context3.next = 27;
                  break;
                }
                if (!(!(options != null && options.spinPerColumn) || options != null && options.spinPerColumn[splitLength])) {
                  _context3.next = 27;
                  break;
                }
                _context3.next = 25;
                return wait((splitLength + 1) * 50);
              case 25:
                spinReelSignal.dispatch({
                  columnId: splitLength,
                  useTween: true,
                  reverse: reverse
                });
                spinReelSignal.dispatch({
                  columnId: splitLength,
                  useTween: true,
                  reverse: reverse,
                  isGodReel: true
                });
              case 27:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return _spinReels.apply(this, arguments);
      }
      function drawEndResults(models, options) {
        var pillarCountPerGod = models.gameplay.getCurrentPillarCounts();
        var symbolsData = options != null && options.isRespin ? {
          currentSymbols: models.playfield.totalResults,
          includedColumns: options == null ? void 0 : options.canSpinPerColumn,
          hasGodInReels: options == null ? void 0 : options.hasGodInReels,
          pillarCountPerGod: pillarCountPerGod
        } : {
          specials: models.gameplay.activatedSpecialsList,
          cheat: models.hud.isEasyTumbleCheat,
          pillarCountPerGod: pillarCountPerGod
        };
        var currentSymbols = generateRandomSymbols(symbolsData);
        console.log("drawEndResults - " + (options != null && options.isRespin ? 'isRespin' : 'isNormal') + " | symbols", structuredClone(currentSymbols));
        var _generateCoinsAndSetS = generateCoinsAndSetSymbols(currentSymbols, models, options),
          symbols = _generateCoinsAndSetS.symbols,
          hasGodInReels = _generateCoinsAndSetS.hasGodInReels,
          coinsResult = _generateCoinsAndSetS.coinsResult;
        var godSymbols = setGodReels(models, {
          hasGodInReels: hasGodInReels,
          isRespin: options == null ? void 0 : options.isRespin,
          canSpinPerColumn: options == null ? void 0 : options.canSpinPerColumn
        });
        if (options != null && options.isRespin && options != null && options.useGodReels) {
          setReelsSignal.dispatch({
            symbols: symbols,
            coinsData: coinsResult,
            comesFromMediator: true
          });
        }
        return {
          symbols: godSymbols,
          coinsResult: coinsResult
        };
      }
      function stopReels(_x6, _x7) {
        return _stopReels.apply(this, arguments);
      }
      function _stopReels() {
        _stopReels = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(models, options) {
          var i, splitLength, promises;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                if (options != null && options.useRollToCenter) {
                  _context5.next = 14;
                  break;
                }
                i = 0;
              case 2:
                if (!(i < models.playfield.reels.length)) {
                  _context5.next = 12;
                  break;
                }
                if (options != null && options.spinPerColumn[i]) {
                  _context5.next = 5;
                  break;
                }
                return _context5.abrupt("continue", 9);
              case 5:
                _context5.next = 7;
                return wait((i + 1) * 10);
              case 7:
                showReelResultSignal.dispatch({
                  columnId: i
                });
                showReelResultSignal.dispatch({
                  columnId: i,
                  isGodReel: true
                });
              case 9:
                i++;
                _context5.next = 2;
                break;
              case 12:
                _context5.next = 25;
                break;
              case 14:
                splitLength = Math.floor(models.playfield.reels.length / 2);
                promises = [];
                promises.push(new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve) {
                  var _i4, reversedIndex;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        _i4 = 0;
                      case 1:
                        if (!(_i4 < splitLength)) {
                          _context4.next = 16;
                          break;
                        }
                        reversedIndex = models.playfield.reels.length - 1 - _i4; // Left to middle
                        if (!(!(options != null && options.spinPerColumn) || options != null && options.spinPerColumn[_i4])) {
                          _context4.next = 8;
                          break;
                        }
                        _context4.next = 6;
                        return wait((_i4 + 1) * 25);
                      case 6:
                        showReelResultSignal.dispatch({
                          columnId: _i4,
                          useTween: true
                        });
                        showReelResultSignal.dispatch({
                          columnId: _i4,
                          useTween: true,
                          isGodReel: true
                        });
                      case 8:
                        if (!(!(options != null && options.spinPerColumn) || options != null && options.spinPerColumn[reversedIndex])) {
                          _context4.next = 13;
                          break;
                        }
                        _context4.next = 11;
                        return wait((_i4 + 1) * 25);
                      case 11:
                        showReelResultSignal.dispatch({
                          columnId: reversedIndex,
                          useTween: true
                        });
                        showReelResultSignal.dispatch({
                          columnId: reversedIndex,
                          useTween: true,
                          isGodReel: true
                        });
                      case 13:
                        _i4++;
                        _context4.next = 1;
                        break;
                      case 16:
                        resolve();
                      case 17:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }))));

                // Middle
                _context5.next = 19;
                return Promise.all(promises);
              case 19:
                if (!(models.playfield.reels.length % 2 !== 0)) {
                  _context5.next = 25;
                  break;
                }
                if (!(!(options != null && options.spinPerColumn) || options != null && options.spinPerColumn[splitLength])) {
                  _context5.next = 25;
                  break;
                }
                _context5.next = 23;
                return wait((splitLength + 1) * 25);
              case 23:
                showReelResultSignal.dispatch({
                  columnId: splitLength,
                  useTween: true
                });
                showReelResultSignal.dispatch({
                  columnId: splitLength,
                  useTween: true,
                  isGodReel: true
                });
              case 25:
                if (models.playfield.allReelsStopped) {
                  _context5.next = 30;
                  break;
                }
                _context5.next = 28;
                return wait(10);
              case 28:
                _context5.next = 25;
                break;
              case 30:
                _context5.next = 32;
                return wait(250);
              case 32:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }));
        return _stopReels.apply(this, arguments);
      }
      function checkFreeSpinsActivation(_x8) {
        return _checkFreeSpinsActivation.apply(this, arguments);
      }
      function _checkFreeSpinsActivation() {
        _checkFreeSpinsActivation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(models) {
          var _models$playfield$wai2;
          var _models$playfield$wai;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                if (models.gameplay.hasAnySpecialActivated && !models.gameplay.specialsFeatureActivated) {
                  freeSpinsActivateAnimationSignal.dispatch({
                    activatedSpecialCount: models.gameplay.activatedSpecialCount
                  });
                  void wait(500).then(function () {
                    models.playfield.setActiveSpecialSymbols(models.gameplay.activatedSpecialsList);
                  });
                  models.gameplay.specialsFeatureActivated = true;
                } else {
                  (_models$playfield$wai = models.playfield.waitingStopPromise) == null || _models$playfield$wai.resolve();
                }
                _context6.next = 3;
                return (_models$playfield$wai2 = models.playfield.waitingStopPromise) == null ? void 0 : _models$playfield$wai2.promise;
              case 3:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }));
        return _checkFreeSpinsActivation.apply(this, arguments);
      }
      function calculateWon(totalResults, tumbleData, models) {
        var currentWon = 0;
        var winlines = getWinlinesFromTumbleData(totalResults, tumbleData);
        winlines.forEach(function (data) {
          var winnings = models.playfield.getSymbolWinnings(data.value, data.count, models.hud.stake);
          currentWon += winnings;
        });
        var totalMultiplier = models.playfield.getMultiplierTotal();
        return {
          won: currentWon,
          multiplier: totalMultiplier
        };
      }
      function getWinlinesFromTumbleData(symbols, tumbleData) {
        var winlinesArray = new Map();
        var flatMapSymbols = flatMap(symbols, function (symbolColumn) {
          return symbolColumn;
        });
        var wildCount = flatMapSymbols.filter(function (symbolColumn) {
          return symbolColumn.value === specialSymbolTypeToId[SpecialSymbolTypes.Wild];
        }).length;
        tumbleData.forEach(function (data) {
          var col = data.colId;
          data.removedIndices.forEach(function (row) {
            var symbol = symbols[col][row];
            if (symbol.value !== specialSymbolTypeToId.wild && symbol.value !== specialSymbolTypeToId.multiplier) {
              var _winlinesArray$get;
              winlinesArray.set(symbol.value, ((_winlinesArray$get = winlinesArray.get(symbol.value)) != null ? _winlinesArray$get : 0) + 1);
            }
          });
        });

        // Add count of wilds to all winlines
        winlinesArray.forEach(function (count, value) {
          winlinesArray.set(value, count + wildCount);
        });
        var winlines = Array.from(winlinesArray.entries()).map(function (_ref) {
          var value = _ref[0],
            count = _ref[1];
          return {
            value: value,
            count: count
          };
        });
        return winlines;
      }
      function generateCoinsAndSetSymbols(symbols, models, options) {
        var _options$hasGodInReel;
        var hasGodInReels = (_options$hasGodInReel = options == null ? void 0 : options.hasGodInReels) != null ? _options$hasGodInReel : drawGodsInReels({
          columnCount: models.playfield.godReels.length,
          excludeColumnIndices: [3],
          isEndResult: true,
          cheat: models.hud.isMysteryColumnCheat,
          isRespin: options == null ? void 0 : options.isRespin,
          useGodReels: options == null ? void 0 : options.useGodReels
        });
        console.log('generateCoins | hasGodInReels', hasGodInReels);
        var isFreeSpin = models.gameplay.roundType === RoundTypes.FreeSpin;
        // const coinsResult = generateJackpotCoinsResult({ reelsData, jackpotTypes: [JackpotTypes.Unreal, JackpotTypes.Divine, JackpotTypes.Heroic, JackpotTypes.Warlord], freeSpins: models.gameplay.roundType === RoundTypes.FreeSpin, isRespin: options?.isRespin });
        var activeGods = isFreeSpin ? models.gameplay.activatedGodsList : Object.values(GodFeatureTypes).map(function (v) {
          return v;
        });
        var coinsResult = generateJackpotCoinsResultTwo({
          reelsData: reelsData,
          jackpotTypesPerColumn: gameData.jackpotTypesPerColumn,
          activeGods: activeGods,
          freeSpins: models.gameplay.roundType === RoundTypes.FreeSpin,
          isRespin: options == null ? void 0 : options.isRespin
        });
        console.log('generateCoins | coinsResult', structuredClone(coinsResult));
        var coinsResultWithGods = addGodCoinsToCoinsResult(coinsResult, {
          jackpotGodTypePerColumn: gameData.godTypePerColumn.map(function (id) {
            return godToJackpotType[id];
          }),
          activeGods: activeGods,
          hasGodInReels: hasGodInReels,
          reelsData: reelsData,
          freeSpins: models.gameplay.roundType === RoundTypes.FreeSpin,
          cheat: models.hud.isGodCoinCheat
        });
        console.log('generateCoins | coinsResultWithGods', structuredClone(coinsResultWithGods));
        var symbolsWithGods = getGodReelsResult(symbols, {
          hasGodInReels: hasGodInReels
        });
        console.log('generateCoins | symbolsWithGods', structuredClone(symbolsWithGods));
        console.log('generateCoins | options.isRespin', options == null ? void 0 : options.isRespin, options == null ? void 0 : options.canSpinPerColumn);
        models.playfield.setSymbols(symbolsWithGods, coinsResultWithGods, options != null && options.isRespin ? options == null ? void 0 : options.canSpinPerColumn : undefined);
        return {
          symbols: symbolsWithGods,
          hasGodInReels: hasGodInReels,
          coinsResult: coinsResult
        };
      }
      function setGodReels(models, options) {
        var godSymbols = generateGodReelsResult({
          godValuePerColumn: gameData.godTypePerColumn.map(function (id) {
            return godFeatureTypeToId[id];
          }),
          reelsData: bonusReelsData,
          hasGodInReels: options == null ? void 0 : options.hasGodInReels,
          isEndResult: true
        });
        console.log('setGodReels | godSymbols', godSymbols);
        models.playfield.setGodSymbols(godSymbols, options != null && options.isRespin ? options == null ? void 0 : options.canSpinPerColumn : undefined);
        return godSymbols;
      }
      function animateCoins(_x9, _x10, _x11) {
        return _animateCoins.apply(this, arguments);
      }
      function _animateCoins() {
        _animateCoins = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(godSymbols, coinsResult, models) {
          var hasGodSymbols, i;
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                //Animate god Symbols
                hasGodSymbols = godSymbols.some(function (column) {
                  return column.some(function (symbol) {
                    return symbol.value > 0;
                  });
                });
                if (!hasGodSymbols) {
                  _context7.next = 5;
                  break;
                }
                for (i = 0; i < models.playfield.godReels.length; i++) {
                  animateGodSymbolSignal.dispatch({
                    colId: i
                  });
                }
                _context7.next = 5;
                return wait(250);
              case 5:
                if (!coinsResult.some(function (row) {
                  return row.some(function (symbol) {
                    return symbol.coinType === CoinTypes.God;
                  });
                })) {
                  _context7.next = 10;
                  break;
                }
                _context7.next = 8;
                return moveFeatureCoins(models.playfield.featureCoinDropPositions, models.gameplay.roundType);
              case 8:
                _context7.next = 10;
                return wait(400);
              case 10:
                if (!coinsResult.some(function (row) {
                  return row.some(function (symbol) {
                    return symbol.coinType === CoinTypes.Jackpot;
                  });
                })) {
                  _context7.next = 15;
                  break;
                }
                _context7.next = 13;
                return moveJackpotCoins(models.playfield.jackpotCoinDropPositions, models.gameplay.roundType);
              case 13:
                _context7.next = 15;
                return wait(400);
              case 15:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }));
        return _animateCoins.apply(this, arguments);
      }
      function handleRandomSpecials(_x12) {
        return _handleRandomSpecials.apply(this, arguments);
      }
      function _handleRandomSpecials() {
        _handleRandomSpecials = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(models) {
          var godsDrawn, activatedSpecialTypes, hasAnySpecialActivated, symbolsWithGods;
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                if (!(models.gameplay.roundType !== RoundTypes.Normal)) {
                  _context8.next = 2;
                  break;
                }
                return _context8.abrupt("return");
              case 2:
                //Update reels with random god feature from god pillar pots if coins were won
                godsDrawn = models.gameplay.hasAnySpecialActivated ? [] : models.playfield.godCoinDrawn;
                console.log('handleRandomSpecials | godsDrawn', godsDrawn);
                activatedSpecialTypes = drawRandomGodFeatureActivation({
                  godCoinDrawn: godsDrawn,
                  activatedSpecialFreeSpins: models.gameplay.activatedSpecialFreeSpins,
                  activatedSpecialCount: models.gameplay.activatedSpecialCount,
                  roundType: models.gameplay.roundType,
                  cheat: models.hud.isRandomCheat
                });
                console.log('handleRandomSpecials | activatedSpecialTypes', activatedSpecialTypes);
                hasAnySpecialActivated = Object.values(activatedSpecialTypes).some(function (value) {
                  return value > 0;
                });
                console.log('handlehandleRandomSpecialsSpecials | hasAnySpecialActivated', hasAnySpecialActivated);
                if (!hasAnySpecialActivated) {
                  _context8.next = 13;
                  break;
                }
                symbolsWithGods = models.playfield.updateReelsResultWithGodFeature(activatedSpecialTypes);
                models.playfield.setSymbols(symbolsWithGods);
                _context8.next = 13;
                return wait(1000);
              case 13:
              case "end":
                return _context8.stop();
            }
          }, _callee8);
        }));
        return _handleRandomSpecials.apply(this, arguments);
      }
      function handleSymbolTumbles(_x13, _x14, _x15, _x16) {
        return _handleSymbolTumbles.apply(this, arguments);
      }
      function _handleSymbolTumbles() {
        _handleSymbolTumbles = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(tumbleData, reverse, models, options) {
          var tumbleCount, totalWon, firstRespinPop, currentWon;
          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
              case 0:
                tumbleCount = options != null && options.isRespin ? models.playfield.tumbleTotalCount : 0;
                totalWon = 0;
                firstRespinPop = options != null && options.isRespinPop ? true : false;
              case 3:
                if (!firstRespinPop) {
                  tumbleCount++;
                  currentWon = calculateWon(models.playfield.totalResults, tumbleData, models);
                  createWinningsSignal.dispatch({
                    won: currentWon.won,
                    multiplier: currentWon.multiplier
                  });
                  totalWon += currentWon.won * currentWon.multiplier;
                  models.hud.won = totalWon;
                }
                firstRespinPop = false;
                void wait(800).then(function () {
                  if (tumbleData.length > 0 && models.gameplay.roundType === RoundTypes.Normal) {
                    increaseTumbleCountSignal.dispatch(1);
                  }
                });
                _context10.next = 8;
                return Promise.all(tumbleData.map( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(data) {
                  var reelContext, height, yPos;
                  return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                      case 0:
                        popSymbolsSignal.dispatch({
                          colId: data.colId,
                          rows: data.removedIndices
                        });
                        _context9.next = 3;
                        return wait(800);
                      case 3:
                        if (models.gameplay.roundType === RoundTypes.Normal) {
                          models.playfield.tumbleTotalCount = tumbleCount;
                        }
                        tumbleSymbolsSignal.dispatch({
                          colId: data.colId,
                          indices: data.remainingTumblePos.map(function (pos) {
                            return pos.index;
                          }),
                          positions: data.remainingTumblePos.map(function (pos) {
                            return pos.shift;
                          })
                        });
                        reelContext = models.playfield.reels[data.colId].context;
                        height = reelsData.transform[data.colId].h;
                        yPos = !reverse ? (data.og.length + 1) * height : -data.removedIndices.length * height;
                        data.removedIndices.forEach(function (value, index) {
                          var symbol = reelContext.reelModel.symbols[value];
                          reelContext.service.setNewSymbolCallback(symbol, data.newValues[index], undefined, true);
                          symbol.scale = Vec3.ONE;
                          symbol.position = new Vec3(0, yPos, 0);
                          yPos += reverse ? -height : height;
                        });
                        _context9.next = 11;
                        return wait(100);
                      case 11:
                        tumbleSymbolsSignal.dispatch({
                          colId: data.colId,
                          indices: data.newTumblePos.map(function (p) {
                            return p.index;
                          }),
                          positions: data.newTumblePos.map(function (p) {
                            return p.shift;
                          })
                        });
                        _context9.next = 14;
                        return wait(800);
                      case 14:
                        _context9.next = 16;
                        return reelContext.service.setReel(data.result, {
                          comesFromMediator: true
                        }, true);
                      case 16:
                        models.playfield.setResultOfReel(data.result, data.colId);
                      case 17:
                      case "end":
                        return _context9.stop();
                    }
                  }, _callee9);
                }))));
              case 8:
                tumbleData = getTumbleSymbolData(models.playfield.totalResults, reverse, models);
              case 9:
                if (tumbleData.length > 0) {
                  _context10.next = 3;
                  break;
                }
              case 10:
                models.hud.setWinnings(totalWon);
                models.playfield.reset();
              case 12:
              case "end":
                return _context10.stop();
            }
          }, _callee10);
        }));
        return _handleSymbolTumbles.apply(this, arguments);
      }
      function getTumbleSymbolData(symbols, reverse, models, options) {
        var tumbleData = [];
        var winningSymbols = getWinningSymbols(symbols, gameData.winlines.minimumCount);
        var normalSymbolsCount = winningSymbols.filter(function (symbolValue) {
          return symbolValue < specialSymbolTypeToId[SpecialSymbolTypes.Wild];
        });
        if (winningSymbols.length === 0 || normalSymbolsCount.length === 0) {
          if (options != null && options.isRespinPop) {
            winningSymbols = getWinningSymbols(symbols, 1, {
              isRespinPop: true
            });
          } else {
            return tumbleData;
          }
        }
        symbols.forEach(function (symbolColumn, c) {
          var columnData = {
            colId: c,
            removedIndices: [],
            newValues: [],
            result: [],
            og: [],
            remainingTumblePos: [],
            newTumblePos: []
          };
          symbolColumn.forEach(function (symbol, i) {
            if (i === 0 || i === symbolColumn.length - 1) {
              return;
            }
            if (winningSymbols.includes(symbol.value)) {
              columnData.removedIndices.push(i);
            }
          });
          if (options != null && options.isRespinPop) {
            columnData.removedIndices = shuffle(columnData.removedIndices).slice(0, options.removeCount);
          }
          var height = reelsData.transform[c].h;
          var moved = computeShifts(symbolColumn.length, columnData.removedIndices, reverse, height);
          for (var _i = 0, _moved = moved; _i < _moved.length; _i++) {
            var _moved$_i = _moved[_i],
              index = _moved$_i.index,
              shift = _moved$_i.shift;
            var _reelModel = models.playfield.reels[c].reelModel;
            var visualSymbol = _reelModel.symbols[index];
            columnData.remainingTumblePos.push({
              index: index,
              shift: visualSymbol.y + shift
            });
          }
          var reelModel = models.playfield.reels[c].reelModel;
          columnData.newTumblePos = computeNewTumbleTargets(reelModel, columnData.removedIndices, reverse);
          if (columnData.removedIndices.length > 0) {
            columnData.newValues = columnData.removedIndices.map(function () {
              return randomizer.betterRandom({
                cheat: models.hud.isEasyTumbleCheat
              });
            });
            var filtered = [];
            symbolColumn.forEach(function (s, i) {
              if (columnData.removedIndices.indexOf(i) === -1) {
                filtered.push(s.value);
              }
            });
            columnData.result = reverse ? [].concat(columnData.newValues, filtered) : [].concat(filtered, columnData.newValues);
            columnData.og = symbolColumn.map(function (s) {
              return s.value;
            });
            tumbleData.push(columnData);
          }
        });
        return tumbleData;
      }
      function getWinningSymbols(symbols, mimimumCount, options) {
        var symbolCount = {};
        var winningSymbols = [];
        var flatMapSymbols = flatMap(symbols, function (symbolColumn) {
          return symbolColumn;
        });
        var wildCount = flatMapSymbols.filter(function (symbolColumn) {
          return symbolColumn.value === specialSymbolTypeToId[SpecialSymbolTypes.Wild];
        }).length;
        symbols.forEach(function (symbolColumn) {
          symbolColumn.forEach(function (symbol, i) {
            var _symbolCount$symbol$v;
            if (i === 0 || i === symbolColumn.length - 1) {
              return;
            }
            symbolCount[symbol.value] = ((_symbolCount$symbol$v = symbolCount[symbol.value]) != null ? _symbolCount$symbol$v : 0) + 1;
            var currentMinimumCount = options != null && options.isRespinPop ? 1 : mimimumCount;
            var isWinningSymbol = symbolCount[symbol.value] >= currentMinimumCount || symbolCount[symbol.value] + wildCount >= currentMinimumCount;
            if (isWinningSymbol || symbol.value === specialSymbolTypeToId[SpecialSymbolTypes.Wild] || symbol.value === specialSymbolTypeToId[SpecialSymbolTypes.Multiplier]) {
              if (!winningSymbols.includes(symbol.value)) {
                winningSymbols.push(symbol.value);
              }
            }
          });
        });
        if (options != null && options.isRespinPop) {
          var lowestValue = Object.keys(symbolCount).map(function (key) {
            return parseInt(key);
          }).sort(function (a, b) {
            return a - b;
          })[0];
          winningSymbols = [lowestValue];
          return winningSymbols;
        }

        //Add wilds to normal symbol count
        var keys = Object.keys(symbolCount).map(function (key) {
          return parseInt(key);
        });
        for (var i = 0; i < keys.length; i++) {
          var value = keys[i];
          if (value !== specialSymbolTypeToId[SpecialSymbolTypes.Wild] && value !== specialSymbolTypeToId[SpecialSymbolTypes.Multiplier]) {
            for (var j = 0; j < wildCount; j++) {
              symbolCount[value] += 1;
            }
          }
          if (symbolCount[value] >= mimimumCount) {
            if (!winningSymbols.includes(value)) {
              winningSymbols.push(value);
            }
          }
        }
        return winningSymbols;
      }
      function computeShifts(length, removed, reverse, step) {
        if (step === void 0) {
          step = 120;
        }
        var isRemoved = new Array(length).fill(false);
        for (var _iterator = _createForOfIteratorHelperLoose(removed), _step; !(_step = _iterator()).done;) {
          var idx = _step.value;
          isRemoved[idx] = true;
        }
        var result = [];
        if (reverse) {
          var removedBelow = 0;
          for (var i = length - 1; i >= 0; i--) {
            if (isRemoved[i]) {
              removedBelow++;
            } else if (removedBelow > 0) {
              result.push({
                index: i,
                shift: removedBelow * step
              });
            }
          }
        } else {
          var removedAbove = 0;
          for (var _i2 = 0; _i2 < length; _i2++) {
            if (isRemoved[_i2]) {
              removedAbove++;
            } else if (removedAbove > 0) {
              result.push({
                index: _i2,
                shift: -removedAbove * step
              });
            }
          }
        }
        return result;
      }
      function computeNewTumbleTargets(reelModel, removedIndices, reverse) {
        if (removedIndices.length === 0) return [];
        var sorted = [].concat(removedIndices).sort(function (a, b) {
          return a - b;
        });
        var targets = [];
        if (reverse) {
          for (var j = 0; j < sorted.length; j++) {
            targets.push({
              index: sorted[j],
              shift: reelModel.symbols[j].y
            });
          }
        } else {
          var last = reelModel.symbols.length - 1;
          for (var _j = 0; _j < sorted.length; _j++) {
            var removedIdx = sorted[sorted.length - 1 - _j];
            targets.push({
              index: removedIdx,
              shift: reelModel.symbols[last - _j].y
            });
          }
        }
        return targets;
      }
      function handleRespinTrigger(_x17, _x18) {
        return _handleRespinTrigger.apply(this, arguments);
      }
      function _handleRespinTrigger() {
        _handleRespinTrigger = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(models, reverse) {
          var randomTrigger, godTypes, randomList, randomIndex, randomGods, currentResult, newTumbleData, randomRemoveCount, useGodReels, canSpinPerColumn, drawCallback, columnIds;
          return _regeneratorRuntime().wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
              case 0:
                randomTrigger = Math.floor(Math.random() * 5) === 1 ? true : false; // 1 in 5 chance
                models.gameplay.respinEnabled = models.hud.isRespinCheat ? true : randomTrigger;
                if (models.gameplay.respinEnabled) {
                  _context11.next = 4;
                  break;
                }
                return _context11.abrupt("return");
              case 4:
                // Respin triggered by random god
                godTypes = Object.values(GodFeatureTypes);
                randomList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2];
                randomIndex = Math.floor(Math.random() * randomList.length);
                randomGods = randomList[randomIndex] < godTypes.length ? [godTypes[randomList[randomIndex]]] : godTypes;
                respinTriggerSignal.dispatch({
                  godTypes: randomGods
                });
                currentResult = models.playfield.totalResults;
                newTumbleData = [];
                if (!models.hud.isRespinPopEnabled) {
                  _context11.next = 16;
                  break;
                }
                randomRemoveCount = Math.floor(Math.random() * (gameData.respin.removeCount.max - gameData.respin.removeCount.min)) + gameData.respin.removeCount.min;
                newTumbleData = getTumbleSymbolData(currentResult, reverse, models, {
                  isRespinPop: true,
                  removeCount: randomRemoveCount
                });
                _context11.next = 38;
                break;
              case 16:
                useGodReels = models.hud.isRespinGodsEnabled;
                canSpinPerColumn = getRespinPerColumn(randomGods, useGodReels); // Set middle if prefered when both gods are triggered
                drawCallback = function drawCallback(symbols, hasGodInReels) {
                  drawEndResults(models, {
                    isRespin: true,
                    canSpinPerColumn: canSpinPerColumn,
                    useGodReels: useGodReels,
                    hasGodInReels: hasGodInReels
                  });
                };
                if (useGodReels) {
                  _context11.next = 29;
                  break;
                }
                _context11.next = 22;
                return spinReels(reverse, models, {
                  useRollToCenter: models.hud.isRollToCenterEnabled,
                  spinPerColumn: canSpinPerColumn
                });
              case 22:
                drawCallback();
                _context11.next = 25;
                return wait(reelsData.rollTime.respin);
              case 25:
                _context11.next = 27;
                return stopReels(models, {
                  useRollToCenter: models.hud.isRollToCenterEnabled,
                  spinPerColumn: canSpinPerColumn
                });
              case 27:
                _context11.next = 37;
                break;
              case 29:
                columnIds = canSpinPerColumn.map(function (value, index) {
                  if (value) return index;
                }).filter(function (value) {
                  return value !== undefined;
                });
                respinGodsSignal.dispatch({
                  columnIds: columnIds
                });
                _context11.next = 33;
                return Promise.all([].concat(models.gameplay.respinResolvePromise.map(function (promise) {
                  return promise;
                }), [wait(reelsData.rollTime.respin)]));
              case 33:
                models.gameplay.respinResolvePromise = [];
                drawCallback(currentResult, canSpinPerColumn);
                _context11.next = 37;
                return wait(reelsData.rollTime.respin);
              case 37:
                newTumbleData = getTumbleSymbolData(models.playfield.totalResults, reverse, models);
              case 38:
                _context11.next = 40;
                return handleSymbolTumbles(newTumbleData, reverse, models, {
                  isRespin: true,
                  isRespinPop: models.hud.isRespinPopEnabled
                });
              case 40:
                models.gameplay.respinEnabled = false;
              case 41:
              case "end":
                return _context11.stop();
            }
          }, _callee11);
        }));
        return _handleRespinTrigger.apply(this, arguments);
      }
      function getRespinPerColumn(godTypes, isGodReels, includeMiddle) {
        var _countPerGod, _randomDrawPerGod;
        if (isGodReels === void 0) {
          isGodReels = false;
        }
        if (includeMiddle === void 0) {
          includeMiddle = false;
        }
        var spinPerColumn = Array(reelsData.playFieldDimensions.columns).fill(false);
        var countPerGod = (_countPerGod = {}, _countPerGod[GodFeatureTypes.Athena] = 0, _countPerGod[GodFeatureTypes.Ares] = 0, _countPerGod);
        var randomDrawPerGod = (_randomDrawPerGod = {}, _randomDrawPerGod[GodFeatureTypes.Athena] = Math.floor(Math.random() * 3) + 1, _randomDrawPerGod[GodFeatureTypes.Ares] = Math.floor(Math.random() * 3) + 1, _randomDrawPerGod);
        for (var i = 0; i < gameData.godTypePerColumn.length; i++) {
          if (godTypes.includes(gameData.godTypePerColumn[i])) {
            if (!isGodReels || isGodReels && randomDrawPerGod[gameData.godTypePerColumn[i]] > countPerGod[gameData.godTypePerColumn[i]]) {
              spinPerColumn[i] = true;
              countPerGod[gameData.godTypePerColumn[i]]++;
            }
          }
        }
        if (includeMiddle && godTypes.length > 1) {
          var middleColumn = Math.floor(reelsData.playFieldDimensions.columns / 2);
          spinPerColumn[middleColumn] = true;
        }
        return spinPerColumn;
      }
      function playBonusRound(_x19, _x20) {
        return _playBonusRound.apply(this, arguments);
      }
      function _playBonusRound() {
        _playBonusRound = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(models, tumbleCount) {
          var mainMultiplier, bonusSpins, promises, _loop, _iterator3, _step3, mainTotalMultiplier, totalWinnings;
          return _regeneratorRuntime().wrap(function _callee13$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
              case 0:
                models.gameplay.bonusStarted = true;
                _context14.next = 3;
                return wait(800);
              case 3:
                models.hud.won = 0;
                mainMultiplier = models.playfield.setMultiplierFromTumbleCount(tumbleCount);
                models.bonus.setAllMainMultipliers(mainMultiplier);
                models.bonus.setStartBonusSpins(3);
                setRoundTypeSignal.dispatch({
                  roundType: RoundTypes.Bonus
                });
                _context14.next = 10;
                return wait(1000);
              case 10:
                bonusSpins = models.bonus.bonusSpins;
                promises = [];
              case 12:
                _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                  var spin, p;
                  return _regeneratorRuntime().wrap(function _loop$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                      case 0:
                        spin = _step3.value;
                        p = new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve) {
                          var spinsLeft, isGridFull, hasNewResult;
                          return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                            while (1) switch (_context12.prev = _context12.next) {
                              case 0:
                                spinsLeft = models.bonus.getBonusSpinsLeftOfSide(spin.sideType);
                                isGridFull = models.bonus.getBonusSpinsSideIsFull(spin.sideType);
                                if (!(spinsLeft > 0 && !isGridFull || spin.sideType === BonusSideType.Center)) {
                                  _context12.next = 13;
                                  break;
                                }
                                models.bonus.subtractBonusSpinsLeftOfSide(spin.sideType);
                                models.bonus.previousResultCount[spin.sideType] = models.bonus.bonusResult[spin.sideType].length;
                                bonusStartRollsSignal.dispatch({
                                  sideType: spin.sideType
                                });
                                _context12.next = 8;
                                return wait(2000);
                              case 8:
                                bonusStopRollsSignal.dispatch({
                                  sideType: spin.sideType
                                });
                                _context12.next = 11;
                                return wait(1000);
                              case 11:
                                hasNewResult = models.bonus.previousResultCount[spin.sideType] < models.bonus.bonusResult[spin.sideType].length;
                                if (hasNewResult) {
                                  models.bonus.setBonusSpinsLeftOfSide(spin.sideType, 3);
                                }
                              case 13:
                                resolve();
                              case 14:
                              case "end":
                                return _context12.stop();
                            }
                          }, _callee12);
                        })));
                        promises.push(p);
                      case 3:
                      case "end":
                        return _context13.stop();
                    }
                  }, _loop);
                });
                _iterator3 = _createForOfIteratorHelperLoose(bonusSpins);
              case 14:
                if ((_step3 = _iterator3()).done) {
                  _context14.next = 18;
                  break;
                }
                return _context14.delegateYield(_loop(), "t0", 16);
              case 16:
                _context14.next = 14;
                break;
              case 18:
                _context14.next = 20;
                return Promise.all(promises);
              case 20:
                _context14.next = 22;
                return wait(1000);
              case 22:
                models.hud.won = 0;
              case 23:
                if (models.bonus.getTotalBonusSpinLeft() > 0 && !models.bonus.getAllSidesFull()) {
                  _context14.next = 12;
                  break;
                }
              case 24:
                _context14.next = 26;
                return wait(1000);
              case 26:
                mainTotalMultiplier = models.bonus.getTotalMainMultiplier();
                createWinningsSignal.dispatch({
                  won: models.bonus.getTotalCashAmount(),
                  multiplier: mainTotalMultiplier
                });
                totalWinnings = models.bonus.getTotalCashAmount() * mainTotalMultiplier;
                models.hud.setWinnings(totalWinnings);
                bonusResetRollsSignal.dispatch();
                models.bonus.reset();
                setRoundTypeSignal.dispatch({
                  roundType: models.gameplay.previousRoundType
                });
                models.gameplay.bonusStarted = false;
              case 34:
              case "end":
                return _context14.stop();
            }
          }, _callee13);
        }));
        return _playBonusRound.apply(this, arguments);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/randomizer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './specialSymbols.ts', './array.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, SpecialSymbolTypes, shuffle;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SpecialSymbolTypes = module.SpecialSymbolTypes;
    }, function (module) {
      shuffle = module.shuffle;
    }],
    execute: function () {
      exports({
        createWeightedArray: createWeightedArray,
        createWeightedTable: createWeightedTable
      });
      cclegacy._RF.push({}, "43013uUXbVIAbMwkpPqNbOx", "randomizer", undefined);
      var symbolStartingWeights = {
        1: 13,
        2: 12,
        3: 11,
        4: 8,
        5: 7,
        6: 6,
        7: 5,
        8: 5,
        9: 4
      };
      var symbolStartingWeightsCheat = {
        1: 13,
        2: 12,
        3: 11,
        4: 8,
        5: 7
      };
      var aresValues = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
      var athenaValues = [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11];
      function createWeightedArray(weights) {
        var result = [];
        for (var _i = 0, _arr = Object.entries(weights); _i < _arr.length; _i++) {
          var _arr$_i = _arr[_i],
            symbol = _arr$_i[0],
            weight = _arr$_i[1];
          var typedSymbol = Number.isNaN(Number(symbol)) ? symbol // for string T
          : Number(symbol); // for number T
          for (var i = 0; i < weight; i++) {
            result.push(typedSymbol);
          }
        }
        return shuffle(result);
      }
      function createWeightedTable(weights) {
        var result = [];
        for (var _iterator = _createForOfIteratorHelperLoose(weights), _step; !(_step = _iterator()).done;) {
          var entry = _step.value;
          var symbolNum = entry.value;
          for (var i = 0; i < entry.weight; i++) {
            result.push(symbolNum);
          }
        }
        return shuffle(result);
      }
      var Randomizer = exports('Randomizer', /*#__PURE__*/function () {
        function Randomizer() {
          this.logicList = void 0;
          this.cheatList = void 0;
          this.logicList = createWeightedArray(symbolStartingWeights);
          this.cheatList = createWeightedArray(symbolStartingWeightsCheat);
        }
        var _proto = Randomizer.prototype;
        _proto.betterRandom = function betterRandom(data) {
          var _data$specials, _data$specials2;
          var list = structuredClone(data.cheat ? this.cheatList : this.logicList);
          if ((_data$specials = data.specials) != null && _data$specials.includes(SpecialSymbolTypes.Wild)) {
            list = list.concat(aresValues);
          }
          if ((_data$specials2 = data.specials) != null && _data$specials2.includes(SpecialSymbolTypes.Multiplier)) {
            list = list.concat(athenaValues);
          }
          var index = Math.floor(Math.random() * list.length);
          return data.gods ? 0 : list[index];
        };
        return Randomizer;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/reelAnimations.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './reelModel.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _extends, cclegacy, _decorator, Component, math, ReelModel;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      math = module.math;
    }, function (module) {
      ReelModel = module.ReelModel;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "abc707f8npEFYtEhEw+lQ1d", "reelAnimations", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Easing = {
        easeOutQuad: function easeOutQuad(t) {
          return t * (2 - t);
        },
        easeInQuad: function easeInQuad(t) {
          return t * t;
        },
        easeOutCirc: function easeOutCirc(t) {
          return Math.sqrt(1 - (t = t - 1) * t);
        },
        easeOutExpo: function easeOutExpo(t) {
          return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        }
      };
      var outro = [{
        t: 0,
        data: {
          y: 0
        },
        easing: Easing.easeOutCirc
      }, {
        t: 200,
        data: {
          y: 14
        },
        easing: Easing.easeOutCirc
      }, {
        t: 500,
        data: {
          y: 0
        },
        easing: Easing.easeOutExpo
      }];
      var intro = [{
        t: 0,
        data: {
          y: 0
        },
        easing: Easing.easeOutQuad
      }, {
        t: 400,
        data: {
          y: -20
        },
        easing: Easing.easeOutQuad
      }, {
        t: 550,
        data: {
          y: 0
        },
        easing: Easing.easeInQuad
      }];
      function cloneAnimData(arr) {
        return arr.map(function (item) {
          return _extends({}, item, {
            data: _extends({}, item.data),
            easing: item.easing
          });
        });
      }
      var ReelAnimations = exports('ReelAnimations', (_dec = ccclass('ReelAnimations'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ReelAnimations, _Component);
        function ReelAnimations() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.context = void 0;
          _this.model = null;
          return _this;
        }
        var _proto = ReelAnimations.prototype;
        _proto.start = function start() {
          this.model = this.node.getComponent(ReelModel);
        };
        _proto.init = function init(context) {
          this.context = context;
        };
        _proto.tweenInOutReel = /*#__PURE__*/function () {
          var _tweenInOutReel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
            var animData, outputPosition;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  animData = cloneAnimData(data.isIntro ? intro : outro);
                  outputPosition = new math.Vec3();
                  this.node.getPosition(outputPosition);
                  animData[0].data.y = outputPosition.y;
                  animData[1].data.y = outputPosition.y + (data.reverse ? animData[1].data.y : -animData[1].data.y);
                  animData[2].data.y = outputPosition.y;
                  _context.next = 8;
                  return this.playTweenAsync({
                    keyFrames: animData,
                    loopFunction: data.loopFunction
                  });
                case 8:
                  data.completeCallback == null || data.completeCallback(animData[2].data);
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function tweenInOutReel(_x) {
            return _tweenInOutReel.apply(this, arguments);
          }
          return tweenInOutReel;
        }();
        _proto.playTweenAsync = /*#__PURE__*/function () {
          var _playTweenAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref) {
            var keyFrames, loopFunction;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  keyFrames = _ref.keyFrames, loopFunction = _ref.loopFunction;
                  return _context2.abrupt("return", new Promise(function (resolve) {
                    var startTime = performance.now();
                    var totalTime = keyFrames[keyFrames.length - 1].t;
                    var getFrameData = function getFrameData(elapsed) {
                      for (var i = 0; i < keyFrames.length - 1; i++) {
                        var a = keyFrames[i];
                        var b = keyFrames[i + 1];
                        if (elapsed >= a.t && elapsed <= b.t) {
                          var localT = (elapsed - a.t) / (b.t - a.t);
                          var eased = b.easing(localT);
                          return a.data.y + (b.data.y - a.data.y) * eased;
                        }
                      }
                      return keyFrames[keyFrames.length - 1].data.y;
                    };
                    var loop = function loop(now) {
                      var elapsed = now - startTime;
                      var y = getFrameData(elapsed);
                      loopFunction({
                        y: y
                      });
                      if (elapsed < totalTime) {
                        requestAnimationFrame(loop);
                      } else {
                        resolve();
                      }
                    };
                    requestAnimationFrame(loop);
                  }));
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function playTweenAsync(_x2) {
            return _playTweenAsync.apply(this, arguments);
          }
          return playTweenAsync;
        }();
        return ReelAnimations;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/reelArgs.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "63d70JmV0lE9qAi93iBnjnh", "reelArgs", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/reelComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './symbolNode.ts', './reelStatus.ts', './coinData.ts', './jackpotTypes.ts', './roundTypes.ts', './reelsData.ts', './gameplayCalculations.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCFloat, tween, Vec3, Component, SymbolNode, ReelStatus, CoinTypes, JackpotTypes, jackpotTypeToTriggerType, JackpotTriggerTypes, RoundTypes, reelsData, randomizer;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCFloat = module.CCFloat;
      tween = module.tween;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      SymbolNode = module.SymbolNode;
    }, function (module) {
      ReelStatus = module.ReelStatus;
    }, function (module) {
      CoinTypes = module.CoinTypes;
    }, function (module) {
      JackpotTypes = module.JackpotTypes;
      jackpotTypeToTriggerType = module.jackpotTypeToTriggerType;
      JackpotTriggerTypes = module.JackpotTriggerTypes;
    }, function (module) {
      RoundTypes = module.RoundTypes;
    }, function (module) {
      reelsData = module.reelsData;
    }, function (module) {
      randomizer = module.randomizer;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "091dafsqBFNmr5IsfHuH9Ye", "reelComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ReelComponent = exports('ReelComponent', (_dec = ccclass('ReelComponent'), _dec2 = property(CCFloat), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ReelComponent, _Component);
        function ReelComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.context = void 0;
          _initializerDefineProperty(_this, "columnId", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ReelComponent.prototype;
        _proto.init = function init(context) {
          this.context = context;
          var reelModel = context.reelModel;
          reelModel.reelComponent = this;
          this.columnId = reelModel.columnId;
          this.name = reelModel.isBonusReel ? "bonusReel_" + reelModel.columnId : "reel_" + reelModel.columnId;
          var transform = reelModel.config.reelsData.transform[reelModel.columnId];
          this.node.x = transform.x + (reelModel.columnId - reelModel.centerOffsetRatio.x) * transform.w;
          this.node.y = transform.y - reelModel.centerOffsetRatio.y * transform.h;
          var symbols = [];
          for (var row = 0; row < reelModel.config.reelsData.playFieldDimensions.rows[this.columnId].total; row++) {
            var symbolContainer = new SymbolNode();
            symbolContainer.init(reelModel.columnId + "_" + row, reelModel.columnId, reelModel.isBonusReel);
            this.node.addChild(symbolContainer);
            symbolContainer.y = row * transform.h;
            symbols.push(symbolContainer);
          }
          reelModel.symbols = symbols;
        };
        _proto.spinReelHandler = function spinReelHandler(fastPlay, reverse) {
          var _this2 = this;
          return this.context.reelAnims.tweenInOutReel({
            isIntro: true,
            reverse: reverse,
            fastPlay: fastPlay,
            loopFunction: function loopFunction(data) {
              var _this2$context;
              if (!((_this2$context = _this2.context) != null && _this2$context.reelComponent)) {
                return;
              }
              _this2.context.reelComponent.node.y = data.y;
            },
            completeCallback: function completeCallback(data) {
              var _this2$context2;
              if (!((_this2$context2 = _this2.context) != null && _this2$context2.reelComponent)) {
                return;
              }
              _this2.context.reelComponent.node.y = data.y;
            }
          });
        };
        _proto.stopReelHandler = function stopReelHandler(fastPlay, reverse) {
          var _this3 = this;
          return this.context.reelAnims.tweenInOutReel({
            isIntro: false,
            reverse: reverse,
            fastPlay: fastPlay,
            loopFunction: function loopFunction(data) {
              var _this3$context;
              if (!((_this3$context = _this3.context) != null && _this3$context.reelComponent)) {
                return;
              }
              _this3.context.reelComponent.node.y = data.y;
            },
            completeCallback: function completeCallback(data) {
              var _this3$context2;
              if (!((_this3$context2 = _this3.context) != null && _this3$context2.reelComponent)) {
                return;
              }
              _this3.context.reelComponent.node.y = data.y;
            }
          });
        };
        _proto.popSymbolHandler = function popSymbolHandler(rows) {
          var _this4 = this;
          var symbols = this.context.reelModel.symbols;
          rows.forEach(function (row) {
            var symbol = symbols[row];
            tween(symbol).to(0.1, {
              scale: new Vec3(1.25, 1.25, 1)
            }, {
              easing: 'quadOut'
            }).to(0.15, {
              scale: new Vec3(0, 0, 0)
            }, {
              easing: 'quadIn'
            }).call(function () {
              _this4.context.service.clearSymbolCallback(symbol);
            }).start();
          });
        };
        _proto.tumbleSymbolHandler = function tumbleSymbolHandler(symbolToMove) {
          var symbol = this.context.reelModel.symbols[symbolToMove.index];
          tween(symbol).to(0.5, {
            y: symbolToMove.pos
          }, {
            easing: 'bounceOut'
          }).start();
        };
        _proto.updateReelHandler = function updateReelHandler(deltaT, data, reelStopCallback) {
          var model = this.context.reelModel;
          if (model.status !== ReelStatus.Rolling) {
            return;
          }
          var length = model.symbols.length;
          var speed = data.isRespin ? model.config.reelsData.rollSpeed.respin : model.config.reelsData.rollSpeed.normal;
          var ySpeed = speed.y * deltaT;
          for (var i = 0; i < length; i++) {
            var symbolContainer = model.symbols[i];
            symbolContainer.y += data.reverse ? ySpeed : -ySpeed;
            var symbolPosData = data.reverse ? this.reverseSymbolAboveThreshold(symbolContainer.y) : this.symbolAboveThreshold(symbolContainer.y);
            if (symbolPosData.isAbove) {
              symbolContainer.y = symbolPosData.resetYPos;
              this.reorganizeSymbols(model.symbols);
              if (!model.showEndResult) {
                var randomCoinData = data.isBonusReel ? undefined : this.drawRandomCoin(10, data.roundType);
                this.context.service.setNewSymbolCallback(symbolContainer, randomizer.betterRandom({
                  gods: data.isBonusReel,
                  specials: data.specials
                }), randomCoinData);
              } else {
                var _model$resultCoins$mo, _model$resultCoins, _reelSymbol$meta$oldS, _reelSymbol$meta;
                if (model.currentRow < 0) {
                  model.currentRow = model.config.reelsData.playFieldDimensions.rows[model.columnId].visible - 1;
                }
                var reelSymbol = model.result[model.currentRow];
                var coinData = data.isBonusReel ? undefined : (_model$resultCoins$mo = (_model$resultCoins = model.resultCoins) == null ? void 0 : _model$resultCoins[model.currentRow]) != null ? _model$resultCoins$mo : undefined;
                this.context.service.setNewSymbolCallback(symbolContainer, (_reelSymbol$meta$oldS = (_reelSymbol$meta = reelSymbol.meta) == null ? void 0 : _reelSymbol$meta.oldSymbolValue) != null ? _reelSymbol$meta$oldS : reelSymbol.value, coinData, true).then(function () {
                  if (model.currentRow >= 0) {
                    model.currentRow--;
                    if (model.currentRow < 0) {
                      model.status = ReelStatus.Stopping;
                      reelStopCallback == null || reelStopCallback(model.config.columnId, model.hasTension);
                      model.reelStoppedPromise.resolve();
                    }
                  }
                });
              }
            }
          }
        };
        _proto.symbolAboveThreshold = function symbolAboveThreshold(yPos) {
          var model = this.context.reelModel;
          var height = reelsData.transform[model.columnId].h;
          if (yPos < -height + model.endDeviationY) {
            return {
              isAbove: true,
              resetYPos: model.endPositionY - height + model.endDeviationY
            };
          }
          return {
            isAbove: yPos < -height,
            resetYPos: model.endPositionY - height
          };
        };
        _proto.reverseSymbolAboveThreshold = function reverseSymbolAboveThreshold(yPos) {
          var model = this.context.reelModel;
          if (yPos >= model.endPositionY - model.endDeviationY) {
            return {
              isAbove: true,
              resetYPos: yPos - model.endPositionY - model.endDeviationY
            };
          }
          return {
            isAbove: yPos >= model.endPositionY,
            resetYPos: yPos - model.endPositionY
          };
        };
        _proto.reorganizeSymbols = function reorganizeSymbols(symbols) {
          symbols.unshift(symbols.pop());
        };
        _proto.drawRandomCoin = function drawRandomCoin(drawPercentage, roundType) {
          var numCoins = Math.floor(Math.random() * 100);
          if (numCoins > drawPercentage) {
            return undefined;
          }
          /*const coinType = Object.values(CoinTypes)[Math.floor(Math.random() * Object.values(CoinTypes).length)] as CoinTypes;
          const godType = Object.values(GodFeatureTypes)[Math.floor(Math.random() * Object.values(GodFeatureTypes).length)] as GodFeatureTypes;
          const jackpotType = Object.values(JackpotTypes)[Math.floor(Math.random() * Object.values(JackpotTypes).length)] as JackpotTypes;
          const randomCoinData: CoinData = { 
              coinType: coinType, 
              valueType: coinType === CoinTypes.God ? godType : jackpotType,
          };*/
          // God coins are behind the god symbols, so will not show up during the reels rolling
          var jackpots = roundType === RoundTypes.FreeSpin ? Object.values(JackpotTypes) : Object.values(JackpotTypes).filter(function (jackpot) {
            return jackpotTypeToTriggerType[jackpot] === JackpotTriggerTypes.CashGrab;
          });
          var jackpotType = jackpots[Math.floor(Math.random() * jackpots.length)];
          var randomCoinData = {
            coinType: CoinTypes.Jackpot,
            valueType: jackpotType
          };
          return randomCoinData;
        };
        return ReelComponent;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "columnId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/reelConfig.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c595cHm3sJB+Kl/qREoodJl", "reelConfig", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/reelContext.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './reelAnimations.ts', './reelModel.ts', './reelService.ts', './reelComponent.ts'], function (exports) {
  var _inheritsLoose, cclegacy, Node, ReelAnimations, ReelModel, ReelService, ReelComponent;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
    }, function (module) {
      ReelAnimations = module.ReelAnimations;
    }, function (module) {
      ReelModel = module.ReelModel;
    }, function (module) {
      ReelService = module.ReelService;
    }, function (module) {
      ReelComponent = module.ReelComponent;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a6cdepSDvFI/5o4eGoZCWZc", "reelContext", undefined);
      var ReelContext = exports('ReelContext', /*#__PURE__*/function (_Node) {
        _inheritsLoose(ReelContext, _Node);
        function ReelContext() {
          var _this;
          _this = _Node.call(this) || this;
          _this.reelModel = _this.addComponent(ReelModel);
          _this.reelComponent = _this.addComponent(ReelComponent);
          _this.reelAnims = _this.addComponent(ReelAnimations);
          _this.service = _this.addComponent(ReelService);
          return _this;
        }
        var _proto = ReelContext.prototype;
        _proto.init = function init(config) {
          this.name = config.isGodReel ? "bonusReel_" + config.columnId : "reel_" + config.columnId;
          this.reelModel.init(config);
          this.reelComponent.init(this);
          this.reelAnims.init(this);
          this.service.init(this);
        };
        return ReelContext;
      }(Node));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/reelModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './reelStatus.ts', './resolvablePromise.ts', './coinData.ts', './godFeatureTypes.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Component, ReelStatus, ResolvablePromise, CoinTypes, GodFeatureTypes;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      ReelStatus = module.ReelStatus;
    }, function (module) {
      ResolvablePromise = module.ResolvablePromise;
    }, function (module) {
      CoinTypes = module.CoinTypes;
    }, function (module) {
      GodFeatureTypes = module.GodFeatureTypes;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "5f53az2J49GWJhefuz3ToJ1", "reelModel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ReelModel = exports('ReelModel', (_dec = ccclass('ReelModel'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ReelModel, _Component);
        function ReelModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.config = void 0;
          _this.result = void 0;
          _this.resultCoins = void 0;
          _this.status = ReelStatus.Stopped;
          _this.reelStoppedPromise = new ResolvablePromise();
          _this.symbols = void 0;
          _this.reelComponent = void 0;
          _this.currentRow = void 0;
          _this.hasTension = void 0;
          _this.showEndResult = void 0;
          _this.isRespin = void 0;
          _this.activeSpecialSymbols = [];
          _this.endDeviationY = 20;
          return _this;
        }
        var _proto = ReelModel.prototype;
        _proto.init = function init(config) {
          this.config = config;
          this.currentRow = -1;
          this.hasTension = false;
          this.showEndResult = false;
          this.isRespin = false;
        };
        _createClass(ReelModel, [{
          key: "isBonusReel",
          get: function get() {
            return this.config.isGodReel;
          }
        }, {
          key: "bonusValue",
          get: function get() {
            return this.config.godType;
          }
        }, {
          key: "visibleSymbols",
          get: function get() {
            return this.symbols.slice(1, -1);
          }
        }, {
          key: "visibleResult",
          get: function get() {
            return this.result.slice(1, -1);
          }
        }, {
          key: "columnId",
          get: function get() {
            return this.config.columnId;
          }
        }, {
          key: "hasWildCoins",
          get: function get() {
            return this.resultCoins.some(function (coin) {
              return coin.coinType === CoinTypes.God && coin.valueType === GodFeatureTypes.Ares;
            });
          }
        }, {
          key: "hasMultiplierCoins",
          get: function get() {
            return this.resultCoins.some(function (coin) {
              return coin.coinType === CoinTypes.God && coin.valueType === GodFeatureTypes.Athena;
            });
          }
        }, {
          key: "centerOffsetRatio",
          get: function get() {
            return {
              x: Math.floor(this.config.reelsData.playFieldDimensions.columns / 2),
              y: Math.floor(this.config.reelsData.playFieldDimensions.rows[this.columnId].visible / 2)
            };
          }
        }, {
          key: "endPositionY",
          get: function get() {
            return this.config.reelsData.playFieldDimensions.rows[this.columnId].total * this.config.reelsData.transform[this.columnId].h;
          }
        }]);
        return ReelModel;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/reelsData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './bonusSideType.ts'], function (exports) {
  var _extends, cclegacy, BonusSideType;
  return {
    setters: [function (module) {
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BonusSideType = module.BonusSideType;
    }],
    execute: function () {
      var _columnIndicesPerSide;
      cclegacy._RF.push({}, "99c57bNQaVBSIObGdSt3mGy", "reelsData", undefined);
      var reelsData = exports('reelsData', {
        transform: [{
          x: 20,
          y: -156,
          w: 150,
          h: 130
        }, {
          x: 10,
          y: -90,
          w: 150,
          h: 130
        }, {
          x: -5,
          y: -156,
          w: 150,
          h: 130
        }, {
          x: 0,
          y: -90,
          w: 150,
          h: 130
        }, {
          x: 5,
          y: -156,
          w: 150,
          h: 130
        }, {
          x: -10,
          y: -90,
          w: 150,
          h: 130
        }, {
          x: -20,
          y: -156,
          w: 150,
          h: 130
        }],
        rollTime: {
          normal: 1000,
          respin: 2000,
          fast: 250
        },
        rollSpeed: {
          normal: {
            x: 0,
            y: 2000
          },
          respin: {
            x: 0,
            y: 500
          }
        },
        tension: {
          speed: 1000,
          delay: {
            normal: 1700,
            fast: 1500
          }
        },
        playFieldDimensions: {
          columns: 7,
          rows: [{
            total: 5,
            visible: 3
          }, {
            total: 6,
            visible: 4
          }, {
            total: 7,
            visible: 5
          }, {
            total: 8,
            visible: 6
          }, {
            total: 7,
            visible: 5
          }, {
            total: 6,
            visible: 4
          }, {
            total: 5,
            visible: 3
          }]
        },
        columnIndicesPerSide: (_columnIndicesPerSide = {}, _columnIndicesPerSide[BonusSideType.Left] = [0, 1, 2], _columnIndicesPerSide[BonusSideType.Center] = [3], _columnIndicesPerSide[BonusSideType.Right] = [4, 5, 6], _columnIndicesPerSide),
        delayBetweenReels: {
          start: 0,
          stop: 0
        }
      });
      var bonusReelsData = exports('bonusReelsData', _extends({}, reelsData, {
        transform: [{
          x: 20,
          y: -566,
          w: 150,
          h: 130
        }, {
          x: 10,
          y: -635,
          w: 150,
          h: 130
        }, {
          x: 2,
          y: -836,
          w: 150,
          h: 130
        }, {
          x: 0,
          y: -90,
          w: 150,
          h: 130
        }, {
          x: -2,
          y: -836,
          w: 150,
          h: 130
        }, {
          x: -10,
          y: -635,
          w: 150,
          h: 130
        }, {
          x: -20,
          y: -566,
          w: 150,
          h: 130
        }],
        playFieldDimensions: {
          columns: 7,
          rows: [{
            total: 11,
            visible: 3
          }, {
            total: 14,
            visible: 4
          }, {
            total: 17,
            visible: 5
          }, {
            total: 8,
            visible: 6
          }, {
            total: 17,
            visible: 5
          }, {
            total: 14,
            visible: 4
          }, {
            total: 11,
            visible: 3
          }]
        }
      }));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/reelService.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './reelStatus.ts', './wait.ts', './eventSignals.ts', './resolvablePromise.ts', './roundTypes.ts'], function (exports) {
  var _inheritsLoose, _createClass, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Component, ReelStatus, wait, setRoundTypeSignal, spinReelSignal, stopReelSignal, showReelResultSignal, popSymbolsSignal, tumbleSymbolsSignal, ResolvablePromise, RoundTypes;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      ReelStatus = module.ReelStatus;
    }, function (module) {
      wait = module.wait;
    }, function (module) {
      setRoundTypeSignal = module.setRoundTypeSignal;
      spinReelSignal = module.spinReelSignal;
      stopReelSignal = module.stopReelSignal;
      showReelResultSignal = module.showReelResultSignal;
      popSymbolsSignal = module.popSymbolsSignal;
      tumbleSymbolsSignal = module.tumbleSymbolsSignal;
    }, function (module) {
      ResolvablePromise = module.ResolvablePromise;
    }, function (module) {
      RoundTypes = module.RoundTypes;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "65f33Ty5qxLOLLMd3tzIRn7", "reelService", undefined);
      var ccclass = _decorator.ccclass;
      var ReelService = exports('ReelService', (_dec = ccclass('ReelService'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ReelService, _Component);
        function ReelService() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.context = void 0;
          _this.shouldUpdate = false;
          _this.reverse = false;
          _this.isBonusReel = false;
          _this.bonusValue = void 0;
          _this.roundType = RoundTypes.Normal;
          _this.setNewSymbolCallback = void 0;
          _this.clearSymbolCallback = void 0;
          _this.reelStopCallback = void 0;
          _this.setRoundTypeBind = _this.setRoundTypeHandler.bind(_assertThisInitialized(_this));
          _this.spinReelHandlerBind = _this.spinReelHandler.bind(_assertThisInitialized(_this));
          _this.stopReelHandlerBind = _this.stopReelHandler.bind(_assertThisInitialized(_this));
          _this.showReelResultHandlerBind = _this.showReelResultHandler.bind(_assertThisInitialized(_this));
          _this.popSymbolsHandlerBind = _this.popSymbolsHandler.bind(_assertThisInitialized(_this));
          _this.tumbleSymbolsHandlerBind = _this.tumbleSymbolsHandler.bind(_assertThisInitialized(_this));
          return _this;
        }
        var _proto = ReelService.prototype;
        _proto.init = function init(context) {
          this.context = context;
          setRoundTypeSignal.addListener(this.setRoundTypeBind);
          spinReelSignal.addListener(this.spinReelHandlerBind);
          stopReelSignal.addListener(this.stopReelHandlerBind);
          showReelResultSignal.addListener(this.showReelResultHandlerBind);
          popSymbolsSignal.addListener(this.popSymbolsHandlerBind);
          tumbleSymbolsSignal.addListener(this.tumbleSymbolsHandlerBind);
        };
        _proto.onDestroy = function onDestroy() {
          setRoundTypeSignal.removeListener(this.setRoundTypeBind);
          spinReelSignal.removeListener(this.spinReelHandlerBind);
          stopReelSignal.removeListener(this.stopReelHandlerBind);
          showReelResultSignal.removeListener(this.showReelResultHandlerBind);
          popSymbolsSignal.removeListener(this.popSymbolsHandlerBind);
          tumbleSymbolsSignal.removeListener(this.tumbleSymbolsHandlerBind);
        };
        _proto.getReelContext = function getReelContext() {
          return this.context;
        };
        _proto.resetReel = function resetReel() {
          this.reelModel.currentRow = -1;
          this.reelModel.hasTension = false;
          this.reelModel.showEndResult = false;
          this.reelModel.status = ReelStatus.Stopped;
          this.reelModel.isRespin = false;
          this.reelModel.result = [];
          this.reelModel.resultCoins = [];
        };
        _proto.setRoundTypeHandler = function setRoundTypeHandler(data) {
          this.roundType = data.roundType;
        };
        _proto.spinReelHandler = /*#__PURE__*/function () {
          var _spinReelHandler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(args) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(args.columnId !== this.reelModel.columnId || args.fastPlay || args.isGodReel !== this.reelModel.isBonusReel)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  this.reelModel.reelStoppedPromise = new ResolvablePromise();
                  this.reelModel.status = ReelStatus.Started;
                  if (!args.useTween) {
                    _context.next = 7;
                    break;
                  }
                  _context.next = 7;
                  return this.context.reelComponent.spinReelHandler(args.fastPlay, args.reverse);
                case 7:
                  this.reelModel.status = ReelStatus.Rolling;
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function spinReelHandler(_x) {
            return _spinReelHandler.apply(this, arguments);
          }
          return spinReelHandler;
        }();
        _proto.showReelResultHandler = /*#__PURE__*/function () {
          var _showReelResultHandler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(args) {
            var waitTime;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(args.columnId !== this.reelModel.columnId || args.isGodReel !== this.reelModel.isBonusReel)) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  waitTime = this.getTensionDelay(args);
                  _context2.next = 5;
                  return wait(waitTime);
                case 5:
                  this.reelModel.showEndResult = true;
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function showReelResultHandler(_x2) {
            return _showReelResultHandler.apply(this, arguments);
          }
          return showReelResultHandler;
        }();
        _proto.popSymbolsHandler = function popSymbolsHandler(args) {
          if (this.reelModel.columnId !== args.colId || this.reelModel.isBonusReel) {
            return;
          }
          this.context.reelComponent.popSymbolHandler(args.rows);
        };
        _proto.tumbleSymbolsHandler = /*#__PURE__*/function () {
          var _tumbleSymbolsHandler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(args) {
            var i;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(this.reelModel.columnId !== args.colId || this.reelModel.isBonusReel)) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return");
                case 2:
                  for (i = 0; i < args.indices.length; i++) {
                    this.context.reelComponent.tumbleSymbolHandler({
                      index: args.indices[i],
                      pos: args.positions[i]
                    });
                  }
                  _context3.next = 5;
                  return wait(500);
                case 5:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function tumbleSymbolsHandler(_x3) {
            return _tumbleSymbolsHandler.apply(this, arguments);
          }
          return tumbleSymbolsHandler;
        }();
        _proto.getTensionDelay = function getTensionDelay(args) {
          if (!this.reelModel.hasTension || !args.tension) {
            return 0;
          }
          var currentDelay = args.fastPlay ? this.reelModel.config.reelsData.tension.delay.fast : this.reelModel.config.reelsData.tension.delay.normal;
          var tensionId = args.fastPlay ? 1 : args.tension.id;
          return currentDelay * tensionId;
        };
        _proto.stopReelHandler = /*#__PURE__*/function () {
          var _stopReelHandler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(args) {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (!(args.columnId !== this.reelModel.columnId || args.isGodReel !== this.reelModel.isBonusReel)) {
                    _context4.next = 2;
                    break;
                  }
                  return _context4.abrupt("return");
                case 2:
                  this.reelModel.status = ReelStatus.Stopping;
                  if (!args.useTween) {
                    _context4.next = 6;
                    break;
                  }
                  _context4.next = 6;
                  return this.context.reelComponent.stopReelHandler(args.fastPlay, args.reverse);
                case 6:
                  this.reelModel.status = ReelStatus.Stopped;
                case 7:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function stopReelHandler(_x4) {
            return _stopReelHandler.apply(this, arguments);
          }
          return stopReelHandler;
        }();
        _proto.update = function update(dt) {
          if (!this.shouldUpdate) {
            return;
          }
          this.updateReel(dt);
        };
        _proto.updateReel = function updateReel(deltaT) {
          this.context.reelComponent.updateReelHandler(deltaT, {
            reverse: this.reverse,
            isBonusReel: this.reelModel.isBonusReel,
            specials: this.reelModel.activeSpecialSymbols,
            roundType: this.roundType,
            isRespin: this.reelModel.isRespin
          }, this.reelStopCallback);
        };
        _proto.setReel = /*#__PURE__*/function () {
          var _setReel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(symbolValues, data, isEndResult) {
            var _this2 = this;
            var transformH, promises;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  // if (data.comesFromMediator) {
                  //     await Promise.all(this.reelModel.symbols.map((symbolContainer) => this.clearSymbolCallback(symbolContainer)));
                  // }
                  transformH = this.reelModel.config.reelsData.transform[this.reelModel.columnId].h;
                  promises = this.reelModel.symbols.map(function (symbolContainer, row) {
                    var _data$coinData;
                    symbolContainer.y = row * transformH;
                    return _this2.setNewSymbolCallback(symbolContainer, symbolValues[row], data == null || (_data$coinData = data.coinData) == null ? void 0 : _data$coinData[row], isEndResult).then(function () {
                      if (symbolContainer.symbolView) {
                        symbolContainer.symbolModel.symbolPosition = {
                          colId: _this2.reelModel.columnId,
                          rowId: row
                        };
                      }
                    });
                  });
                  _context5.next = 4;
                  return Promise.all(promises);
                case 4:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function setReel(_x5, _x6, _x7) {
            return _setReel.apply(this, arguments);
          }
          return setReel;
        }();
        _proto.getVisibleSymbolValues = function getVisibleSymbolValues(value) {
          return this.visibleSymbols.filter(function (symbolContainer) {
            return symbolContainer.symbolModel.value === value;
          });
        };
        _createClass(ReelService, [{
          key: "reelModel",
          get: function get() {
            return this.context.reelModel;
          }
        }, {
          key: "visibleSymbols",
          get: function get() {
            return this.reelModel.symbols.slice(1, -1);
          }
        }, {
          key: "invisibleSymbols",
          get: function get() {
            return [this.reelModel.symbols[0], this.reelModel.symbols[this.reelModel.symbols.length - 1]];
          }
        }]);
        return ReelService;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/reelStatus.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d8a63e9t79MqKUOquhZ4vN0", "reelStatus", undefined);
      var ReelStatus = exports('ReelStatus', /*#__PURE__*/function (ReelStatus) {
        ReelStatus["Started"] = "starting";
        ReelStatus["Rolling"] = "rolling";
        ReelStatus["Stopping"] = "stopping";
        ReelStatus["Stopped"] = "stopped";
        return ReelStatus;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/resize.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, view, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c312bUGSkRG6KI13uztm5Wr", "resize", undefined);
      var ccclass = _decorator.ccclass;
      var resize = exports('resize', (_dec = ccclass('resize'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(resize, _Component);
        function resize() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = resize.prototype;
        _proto.start = function start() {
          window.addEventListener('resize', this.onResize.bind(this));
          this.onResize();
        };
        _proto.onResize = function onResize() {
          var designHeight = 540;
          var designWidth = 960;
          var newHeight = window.innerHeight;
          var newWidth = Math.round(designWidth * (newHeight / designHeight));
          if (newWidth > window.innerWidth) {
            newWidth = window.innerWidth;
            newHeight = Math.round(designHeight * (newWidth / designWidth));
          }
          view.setCanvasSize(newWidth, newHeight);
        };
        return resize;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/resolvablePromise.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "66c37mAehhAkquC36PnXFlv", "resolvablePromise", undefined);
      var ResolvablePromise = exports('ResolvablePromise', /*#__PURE__*/function () {
        function ResolvablePromise() {
          var _this = this;
          this.promise = void 0;
          this._reject = void 0;
          this._resolve = void 0;
          this._isResolved = false;
          this.promise = new Promise(function (res, rej) {
            _this._reject = rej;
            _this._resolve = res;
          });
          this.promise.then(function () {
            _this._isResolved = true;
          });
        }
        _createClass(ResolvablePromise, [{
          key: "reject",
          get: function get() {
            return this._reject;
          }
        }, {
          key: "resolve",
          get: function get() {
            return this._resolve;
          }
        }, {
          key: "isResolved",
          get: function get() {
            return this._isResolved;
          }
        }]);
        return ResolvablePromise;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/responsive.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Widget, view, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Widget = module.Widget;
      view = module.view;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e8718VxEyNEj5+k+C2ZJX79", "responsive", undefined);
      var ccclass = _decorator.ccclass;
      var responsive = exports('responsive', (_dec = ccclass('responsive'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(responsive, _Component);
        function responsive() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.widget = void 0;
          return _this;
        }
        var _proto = responsive.prototype;
        _proto.start = function start() {
          this.widget = this.node.getComponent(Widget);
          this.setResponsivePosition();
        };
        _proto.setResponsivePosition = function setResponsivePosition() {
          var canvasSize = view.getCanvasSize();
          var designSize = view.getDesignResolutionSize();
          var canvasAspectRatio = canvasSize.width / canvasSize.height;
          var designRatio = designSize.width / designSize.height;
          var differenceOfRatios = Math.abs(canvasAspectRatio - designRatio);
          var isSame = differenceOfRatios < 0.01;
          if (!isSame) {
            if (canvasAspectRatio > designRatio) {
              // update width value
              var factor = canvasSize.height / designSize.height;
              var actualDesignWidth = designSize.width * factor;
              var differenceWidth = (canvasSize.width - actualDesignWidth) / 2;
              var differenceWidthForDesign = differenceWidth / factor;
              if (this.widget.isAlignLeft) {
                this.widget.left -= differenceWidthForDesign;
              } else if (this.widget.isAlignRight) {
                this.widget.right -= differenceWidthForDesign;
              }
            } else if (canvasAspectRatio < designRatio) {
              // update height value
              var _factor = canvasSize.width / designSize.width;
              var actualDesignHeight = designSize.height * _factor;
              var differenceHeight = (canvasSize.height - actualDesignHeight) / 2;
              var differenceHeightForDesign = differenceHeight / _factor;
              if (this.widget.isAlignTop) {
                this.widget.top -= differenceHeightForDesign;
              } else if (this.widget.isAlignBottom) {
                this.widget.bottom -= differenceHeightForDesign;
              }
            }
          }
        };
        _proto.update = function update(deltaTime) {};
        return responsive;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/roundTypes.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "de090H+QX1ONrwYzm92iH96", "roundTypes", undefined);
      var RoundTypes = exports('RoundTypes', /*#__PURE__*/function (RoundTypes) {
        RoundTypes["Normal"] = "normal";
        RoundTypes["FreeSpin"] = "freeSpin";
        RoundTypes["Bonus"] = "bonus";
        return RoundTypes;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/signal.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fe63cqpRstHh5tpe3Iywr5J", "signal", undefined);
      var Signal = exports('Signal', /*#__PURE__*/function () {
        function Signal(name) {
          // Map to store listeners for proper removal
          this.listenerMap = new Map();
          this.name = name;
        }
        var _proto = Signal.prototype;
        _proto.dispatch = function dispatch(args) {
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent(this.name, {
              detail: args
            }));
          }
        };
        _proto.addListener = function addListener(callback) {
          if (typeof window !== 'undefined') {
            var wrappedCallback = function wrappedCallback(event) {
              return callback(event.detail);
            };
            this.listenerMap.set(callback, wrappedCallback);
            window.addEventListener(this.name, wrappedCallback);
          }
        };
        _proto.removeListener = function removeListener(callback) {
          if (typeof window !== 'undefined') {
            var wrappedCallback = this.listenerMap.get(callback);
            if (wrappedCallback) {
              window.removeEventListener(this.name, wrappedCallback);
              this.listenerMap["delete"](callback);
            }
          }
        };
        return Signal;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpAnimator.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, _createClass, cclegacy, _decorator, CCInteger, SpriteFrame, Vec2, UITransform, Sprite;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCInteger = module.CCInteger;
      SpriteFrame = module.SpriteFrame;
      Vec2 = module.Vec2;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class4, _class5, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "95384Qa21tObZet5aQ4LeZw", "SpAnimator", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode,
        menu = _decorator.menu,
        disallowMultiple = _decorator.disallowMultiple,
        executionOrder = _decorator.executionOrder;
      var anm = exports('anm', (_dec = ccclass('anm'), _dec2 = property({
        type: CCInteger,
        displayOrder: 0,
        displayName: "Start Frame"
      }), _dec3 = property({
        type: CCInteger,
        displayOrder: 0,
        displayName: "End Frame"
      }), _dec4 = property({
        type: CCInteger,
        min: 1,
        displayOrder: 1,
        displayName: "Num Tiles X"
      }), _dec5 = property({
        type: CCInteger,
        min: 1,
        displayOrder: 1,
        displayName: "Num Tiles Y"
      }), _dec6 = property({
        min: 0.001,
        displayName: "Frame time"
      }), _dec7 = property({
        type: SpriteFrame
      }), _dec8 = property({
        displayName: "Loop Play"
      }), _dec(_class = (_class2 = function anm() {
        _initializerDefineProperty(this, "start", _descriptor, this);
        _initializerDefineProperty(this, "end", _descriptor2, this);
        _initializerDefineProperty(this, "x", _descriptor3, this);
        _initializerDefineProperty(this, "y", _descriptor4, this);
        _initializerDefineProperty(this, "frame", _descriptor5, this);
        _initializerDefineProperty(this, "sp", _descriptor6, this);
        _initializerDefineProperty(this, "loop", _descriptor7, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "start", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "end", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "x", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "y", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "frame", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.05;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sp", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "loop", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      var SpAnimator = exports('SpAnimator', (_dec9 = ccclass('Sprite Sheet Animator'), _dec10 = menu("2D/Sprite Sheet Animator"), _dec11 = disallowMultiple(true), _dec12 = executionOrder(109), _dec13 = property({
        type: anm
      }), _dec14 = property({
        type: CCInteger,
        serializable: true,
        override: true
      }), _dec15 = property({
        serializable: true,
        visible: false
      }), _dec16 = property({
        serializable: true,
        visible: false
      }), _dec9(_class4 = _dec10(_class4 = _dec11(_class4 = _dec12(_class4 = executeInEditMode(_class4 = (_class5 = /*#__PURE__*/function (_Sprite) {
        _inheritsLoose(SpAnimator, _Sprite);
        function SpAnimator() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Sprite.call.apply(_Sprite, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "anms", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_currentAnm", _descriptor9, _assertThisInitialized(_this));
          /**
           * @EN set if play on load in runtime
           */
          _initializerDefineProperty(_this, "playOnLoad", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_editorPlaying", _descriptor11, _assertThisInitialized(_this));
          _this.anmFrame = 0.05;
          _this.startFrame = 0;
          _this.endFrame = 10;
          _this.frame = 0;
          _this._offset = 0;
          _this._size = new Vec2();
          return _this;
        }
        var _proto = SpAnimator.prototype;
        _proto.onEnable = function onEnable() {
          _Sprite.prototype.onEnable.call(this);
          this.trim = true;
          this.setAnmSize(0);
          {
            this._offset = 0;
          }
          if (this.playOnLoad || this.playInEditor) {
            this.playNewAnm();
          }
        }

        /**
        * @EN it can be used to resume animaton's play as well;
        */;
        _proto.play = function play() {
          this.schedule(this.playAnm, this.anmFrame);
        };
        _proto.stop = function stop() {
          this.unschedule(this.playAnm);
        };
        _proto.playAnm = function playAnm() {
          if (this.frame > this.endFrame) {
            /* stop the anm if it is not loop play */
            if (!this.anms[this._currentAnm].loop) {
              this.stop();
              return;
            }
            this.frame = this.startFrame;
          }
          this.updateRect(this.frame);
          this.frame++;
        };
        _proto.playNewAnm = function playNewAnm() {
          this.stop();
          this.setAnmSize(this._currentAnm);
        };
        _proto.setAnmSize = function setAnmSize(index) {
          var anm = this.anms[index];
          if (!anm) {
            this.stop();
            console.error("animation_" + index + " not exist");
            return;
          }
          if (!anm.sp) {
            this.stop();
            console.error("animation_" + index + " has not spriteframe");
            return;
          }
          if (anm.end < anm.start) {
            this.stop();
            console.error("animation_" + index + " end frame should be greater than start frame");
            return;
          }
          this.startFrame = this.frame = anm.start;
          this.endFrame = anm.end;
          this.anmFrame = anm.frame;
          if (this.spriteFrame != anm.sp) this.spriteFrame = anm.sp;
          // avoid dynamic atlas packing for animated sprite sheets
          anm.sp.packable = false;
          this._size.x = anm.sp.texture.width / anm.x;
          this._size.y = anm.sp.texture.height / anm.y;
          this.node.getComponent(UITransform).setContentSize(this._size.x, this._size.y);
          this.playAnm();
          this.play();
        }

        /**
         * @EN update spriteframe's rect
         */;
        _proto.updateRect = function updateRect(frame) {
          var anm = this.anms[this._currentAnm];
          if (!anm || !anm.sp) {
            return;
          }
          var tileX = anm.x;
          var baseRect = anm.sp.rect;
          var tileWidth = this._size.x;
          var tileHeight = this._size.y;
          var rect = baseRect.clone();
          rect.x = baseRect.x + this._offset + frame % tileX * tileWidth;
          rect.y = baseRect.y + Math.floor(frame / tileX) * tileHeight;
          rect.width = tileWidth;
          rect.height = tileHeight;
          var frameClone = anm.sp.clone();
          frameClone.packable = false;
          frameClone.rect = rect;
          this.spriteFrame = frameClone;
        };
        _createClass(SpAnimator, [{
          key: "defaultAnm",
          get:
          /**
           * @EN get current animation state
           */
          function get() {
            return this._currentAnm;
          },
          set: function set(v) {
            this._currentAnm = v;
            this.setAnmSize(v);
            if (this._editorPlaying) {
              this.playNewAnm();
            }
          }
        }, {
          key: "playInEditor",
          get: function get() {
            return this._editorPlaying;
          },
          set: function set(v) {
            this._editorPlaying = v;
            if (this._editorPlaying) {
              this.playNewAnm();
            } else {
              this.stop();
            }
          }
        }, {
          key: "Anmimation",
          get:
          /**
          * @EN get the state of current animation
          */
          function get() {
            return this._currentAnm;
          }

          /**
          * @EN set the state of current animation
          */,
          set: function set(v) {
            this._currentAnm = v;
            this.playNewAnm();
          }

          /**
          * @EN get the duration of current animation's length
          */
        }, {
          key: "duration",
          get: function get() {
            var anm = this.anms[this._currentAnm];
            var time = anm.frame * (anm.end - anm.start);
            return time;
          }
        }]);
        return SpAnimator;
      }(Sprite), (_descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "anms", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "defaultAnm", [_dec14], Object.getOwnPropertyDescriptor(_class5.prototype, "defaultAnm"), _class5.prototype), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "_currentAnm", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, "playOnLoad", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "playInEditor", [property], Object.getOwnPropertyDescriptor(_class5.prototype, "playInEditor"), _class5.prototype), _descriptor11 = _applyDecoratedDescriptor(_class5.prototype, "_editorPlaying", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class5)) || _class4) || _class4) || _class4) || _class4) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/specialSymbols.ts", ['cc', './godFeatureTypes.ts'], function (exports) {
  var cclegacy, GodFeatureTypes;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GodFeatureTypes = module.GodFeatureTypes;
    }],
    execute: function () {
      var _godTypeToSpecialSymb, _specialSymbolTypeToG, _specialSymbolTypeToI;
      cclegacy._RF.push({}, "ce9f7KuGcRE95PKLrzkW9RR", "specialSymbols", undefined);
      var SpecialSymbolTypes = exports('SpecialSymbolTypes', /*#__PURE__*/function (SpecialSymbolTypes) {
        SpecialSymbolTypes["Wild"] = "wild";
        SpecialSymbolTypes["Multiplier"] = "multiplier";
        return SpecialSymbolTypes;
      }({})); // Athena
      var godTypeToSpecialSymbolType = exports('godTypeToSpecialSymbolType', (_godTypeToSpecialSymb = {}, _godTypeToSpecialSymb[GodFeatureTypes.Athena] = SpecialSymbolTypes.Multiplier, _godTypeToSpecialSymb[GodFeatureTypes.Ares] = SpecialSymbolTypes.Wild, _godTypeToSpecialSymb));
      var specialSymbolTypeToGodType = exports('specialSymbolTypeToGodType', (_specialSymbolTypeToG = {}, _specialSymbolTypeToG[SpecialSymbolTypes.Multiplier] = GodFeatureTypes.Athena, _specialSymbolTypeToG[SpecialSymbolTypes.Wild] = GodFeatureTypes.Ares, _specialSymbolTypeToG));
      var specialSymbolTypeToId = exports('specialSymbolTypeToId', (_specialSymbolTypeToI = {}, _specialSymbolTypeToI[SpecialSymbolTypes.Wild] = 10, _specialSymbolTypeToI[SpecialSymbolTypes.Multiplier] = 11, _specialSymbolTypeToI));
      var specialSymbolIdToType = exports('specialSymbolIdToType', {
        10: SpecialSymbolTypes.Wild,
        11: SpecialSymbolTypes.Multiplier
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/symbolAnimationData.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "df8e7penc1JhYzPVWR4yVv0", "symbolAnimationData", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/symbolModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './godFeatureTypes.ts', './array.ts', './commonAnimations.ts', './specialSymbols.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, CCInteger, CCBoolean, Label, Component, godFeatureTypeToId, shuffle, scaleFadeAnimation, specialSymbolTypeToId;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCInteger = module.CCInteger;
      CCBoolean = module.CCBoolean;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      godFeatureTypeToId = module.godFeatureTypeToId;
    }, function (module) {
      shuffle = module.shuffle;
    }, function (module) {
      scaleFadeAnimation = module.scaleFadeAnimation;
    }, function (module) {
      specialSymbolTypeToId = module.specialSymbolTypeToId;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "85896j+8HZJA5h+wQF73U+s", "symbolModel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SymbolModel = exports('SymbolModel', (_dec = ccclass('SymbolModel'), _dec2 = property(CCInteger), _dec3 = property(CCBoolean), _dec4 = property(CCBoolean), _dec5 = property(CCBoolean), _dec6 = property(CCBoolean), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SymbolModel, _Component);
        function SymbolModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_value", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_isGodSymbol", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hasTriggered", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isCoinCompleted", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "canPlayParticles", _descriptor5, _assertThisInitialized(_this));
          _this.symbolContainer = void 0;
          _this.symbolPosition = void 0;
          _this.multiplierLbl = void 0;
          _this.drawMultiplierValueWeights = {
            1.5: 200,
            2: 100,
            2.5: 20,
            5: 5
          };
          _this.drawMultiplierValues = [];
          return _this;
        }
        var _proto = SymbolModel.prototype;
        _proto.onLoad = function onLoad() {
          this.generateValuesLists();
        };
        _proto.generateValuesLists = function generateValuesLists() {
          var multiplierValuesKeys = Object.keys(this.drawMultiplierValueWeights).map(function (key) {
            return Number(key);
          });
          for (var i = 0; i < multiplierValuesKeys.length; i++) {
            var value = multiplierValuesKeys[i];
            for (var j = 0; j < this.drawMultiplierValueWeights[value]; j++) {
              this.drawMultiplierValues.push(value);
            }
          }
          this.drawMultiplierValues = shuffle(this.drawMultiplierValues);
        };
        _proto.getRandomMultiplier = function getRandomMultiplier() {
          return this.drawMultiplierValues[Math.floor(Math.random() * this.drawMultiplierValues.length)];
        };
        _proto.setSymbol = function setSymbol(config) {
          var _this$getComponentInC;
          this._value = config.symbolValue;
          this._isGodSymbol = Object.values(godFeatureTypeToId).includes(config.symbolValue);
          this.symbolPosition = {
            colId: config.columnId,
            rowId: -1
          };
          this.multiplierLbl = (_this$getComponentInC = this.getComponentInChildren(Label)) != null ? _this$getComponentInC : undefined;
          if (this._value === specialSymbolTypeToId.multiplier) {
            this.multiplier = this.getRandomMultiplier();
          }
        };
        _proto.playMultiplierAnimation = function playMultiplierAnimation(parent) {
          if (this.multiplierLbl !== undefined) {
            scaleFadeAnimation(this.multiplierLbl.node, parent);
          }
        };
        _proto.onReturnToPool = function onReturnToPool() {
          this.reset();
        };
        _proto.onAddToPlayField = function onAddToPlayField() {
          this.reset();
        };
        _proto.reset = function reset() {
          this.hasTriggered = false;
          this.isCoinCompleted = false;
          this.canPlayParticles = false;
        };
        _createClass(SymbolModel, [{
          key: "value",
          get: function get() {
            return this._value;
          }
        }, {
          key: "isGodSymbol",
          get: function get() {
            return this._isGodSymbol;
          }
        }, {
          key: "multiplier",
          get: function get() {
            var _this$multiplierLbl;
            var multiplierString = ((_this$multiplierLbl = this.multiplierLbl) == null || (_this$multiplierLbl = _this$multiplierLbl.string) == null ? void 0 : _this$multiplierLbl.replace('X', '')) || '1';
            var multiplier = parseFloat(multiplierString) || 1;
            return multiplier;
          },
          set: function set(value) {
            if (!this.multiplierLbl) {
              return;
            }
            this.multiplierLbl.string = 'X' + value.toFixed(2);
          }
        }, {
          key: "symbolId",
          get: function get() {
            return this.value.toString() + "_" + this.symbolId.toString() + "_" + this.isGodSymbol.toString();
          }
        }]);
        return SymbolModel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_value", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_isGodSymbol", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hasTriggered", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "isCoinCompleted", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "canPlayParticles", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/symbolNode.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './symbolModel.ts', './eventSignals.ts', './coinComponent.ts', './roundTypes.ts'], function (exports) {
  var _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, instantiate, AnimationComponent, Node, SymbolModel, animateGodSymbolSignal, freeSpinsMultiplyWinlinesSignal, CoinComponent, RoundTypes;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      instantiate = module.instantiate;
      AnimationComponent = module.AnimationComponent;
      Node = module.Node;
    }, function (module) {
      SymbolModel = module.SymbolModel;
    }, function (module) {
      animateGodSymbolSignal = module.animateGodSymbolSignal;
      freeSpinsMultiplyWinlinesSignal = module.freeSpinsMultiplyWinlinesSignal;
    }, function (module) {
      CoinComponent = module.CoinComponent;
    }, function (module) {
      RoundTypes = module.RoundTypes;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "f0a13DJ1NNETaPzaKYEPeiU", "symbolNode", undefined);
      var ccclass = _decorator.ccclass;
      var SymbolNode = exports('SymbolNode', (_dec = ccclass('SymbolNode'), _dec(_class = /*#__PURE__*/function (_Node) {
        _inheritsLoose(SymbolNode, _Node);
        function SymbolNode() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Node.call.apply(_Node, [this].concat(args)) || this;
          _this.symbolModel = _this.addComponent(SymbolModel);
          _this.symbolView = void 0;
          _this.coinObject = void 0;
          _this.columnId = void 0;
          _this.symbolId = void 0;
          _this.isInBonusReel = void 0;
          _this.animateGodSymbolHandlerBind = _this.animateGodSymbolHandler.bind(_assertThisInitialized(_this));
          _this.freeSpinsMultiplyWinlinesBind = _this.freeSpinsMultiplyWinlinesHandler.bind(_assertThisInitialized(_this));
          return _this;
        }
        var _proto = SymbolNode.prototype;
        _proto.init = function init(id, columnId, isInBonusReel) {
          this.symbolId = id;
          this.columnId = columnId;
          this.name = isInBonusReel ? "bonusSymbolContainer_" + this.symbolId : "symbolContainer_" + this.symbolId;
          this.isInBonusReel = isInBonusReel != null ? isInBonusReel : false;
          this.symbolModel.symbolContainer = this;
        };
        _proto.subscribeEvents = function subscribeEvents() {
          animateGodSymbolSignal.addListener(this.animateGodSymbolHandlerBind);
          freeSpinsMultiplyWinlinesSignal.addListener(this.freeSpinsMultiplyWinlinesBind);
        };
        _proto.unsubscribeEvents = function unsubscribeEvents() {
          animateGodSymbolSignal.removeListener(this.animateGodSymbolHandlerBind);
          freeSpinsMultiplyWinlinesSignal.removeListener(this.freeSpinsMultiplyWinlinesBind);
        };
        _proto.addSymbol = function addSymbol(symbol, value, coin, options) {
          this.addChild(symbol);
          this.symbolView = symbol;
          this.symbolModel.setSymbol({
            symbolValue: value,
            columnId: this.columnId
          });
          if (coin) {
            this.addCoin(coin, {
              roundType: options == null ? void 0 : options.roundType,
              jackpotValue: options == null ? void 0 : options.jackpotValue
            });
          }
          this.subscribeEvents();
        };
        _proto.addCoin = function addCoin(coin, options) {
          var coinNode = instantiate(coin);
          this.addChild(coinNode);
          this.coinObject = coinNode.getComponent(CoinComponent);
          if (this.coinObject && (options == null ? void 0 : options.roundType) === RoundTypes.FreeSpin) {
            var _options$jackpotValue;
            this.coinObject.jackpotValue = ((_options$jackpotValue = options == null ? void 0 : options.jackpotValue) != null ? _options$jackpotValue : 0) * 0.01;
          }
        };
        _proto.removeCoin = function removeCoin(destroyCoinObject) {
          if (this.coinObject) {
            if (destroyCoinObject) {
              var _this$coinObject;
              (_this$coinObject = this.coinObject) == null || _this$coinObject.destroyCoin();
            }
            this.coinObject = undefined;
          }
        };
        _proto.removeSymbol = function removeSymbol(symbol) {
          if (symbol !== undefined) {
            var _this$symbolView;
            this.symbolModel.setSymbol({
              symbolValue: 0,
              columnId: this.columnId
            });
            this.removeChild(symbol);
            symbol.destroy();
            if (symbol.uuid === ((_this$symbolView = this.symbolView) == null ? void 0 : _this$symbolView.uuid)) {
              this.unsubscribeEvents();
            }
            this.resetGodSymbols();
          }
          this.symbolView = undefined;
          this.removeCoin(true);
        };
        _proto.animateGodSymbolHandler = function animateGodSymbolHandler(args) {
          if (!this.isInBonusReel || args.colId !== this.columnId) {
            return;
          }
          if (this.symbolModel.isGodSymbol) {
            var _this$symbolView2;
            var animationComponent = (_this$symbolView2 = this.symbolView) == null ? void 0 : _this$symbolView2.getComponent(AnimationComponent);
            if (animationComponent) {
              animationComponent.play();
            }
          }
        };
        _proto.resetGodSymbols = function resetGodSymbols() {
          if (!this.isInBonusReel) {
            return;
          }
          if (this.symbolModel.isGodSymbol) {
            var _this$symbolView3;
            var animationComponent = (_this$symbolView3 = this.symbolView) == null ? void 0 : _this$symbolView3.getComponent(AnimationComponent);
            if (animationComponent) {
              animationComponent.stop();
              // Get the default animation clip's state
              var defaultClip = animationComponent.defaultClip;
              if (defaultClip) {
                var animationState = animationComponent.getState(defaultClip.name);
                animationState.time = 0;
              }
            }
          }
        };
        _proto.freeSpinsMultiplyWinlinesHandler = function freeSpinsMultiplyWinlinesHandler() {
          if (!this.isInBonusReel) {
            return;
          }
          this.symbolModel.playMultiplierAnimation(this.symbolView);
        };
        return SymbolNode;
      }(Node)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/symbolPosition.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ef8bbYpq/tIEpTEe8Cb0fxK", "symbolPosition", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/symbols.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "54b0c4i7zVGbrdkEtNPFAeW", "symbols", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/toggleUpdater.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Toggle, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Toggle = module.Toggle;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f9a2dVgpd1MvZs+tqjy/MOL", "toggleUpdater", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent;
      var ToggleUpdater = exports('ToggleUpdater', (_dec = ccclass('ToggleUpdater'), _dec2 = requireComponent(Toggle), _dec3 = property([Toggle]), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ToggleUpdater, _Component);
        function ToggleUpdater() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "disableToggles", _descriptor, _assertThisInitialized(_this));
          _this.currentToggle = void 0;
          _this.toggleChangedBind = _this.toggleChangedHandler.bind(_assertThisInitialized(_this));
          return _this;
        }
        var _proto = ToggleUpdater.prototype;
        _proto.onLoad = function onLoad() {
          var _this$currentToggle;
          this.currentToggle = this.getComponent(Toggle);
          (_this$currentToggle = this.currentToggle) == null || (_this$currentToggle = _this$currentToggle.node) == null || _this$currentToggle.on('toggle', this.toggleChangedBind);
        };
        _proto.onDestroy = function onDestroy() {
          var _this$currentToggle2;
          (_this$currentToggle2 = this.currentToggle) == null || (_this$currentToggle2 = _this$currentToggle2.node) == null || _this$currentToggle2.off('toggle', this.toggleChangedBind);
        };
        _proto.toggleChangedHandler = function toggleChangedHandler(eventToggle) {
          this.disableToggles.forEach(function (toggle) {
            if (eventToggle.isChecked && toggle.isChecked) {
              toggle.isChecked = false;
            }
          });
        };
        return ToggleUpdater;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "disableToggles", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tumbleAlpha.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './eventSignals.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, CCFloat, CCInteger, Sprite, Color, tween, Component, startRoundSignal, increaseTumbleCountSignal, setRoundTypeSignal;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCFloat = module.CCFloat;
      CCInteger = module.CCInteger;
      Sprite = module.Sprite;
      Color = module.Color;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      startRoundSignal = module.startRoundSignal;
      increaseTumbleCountSignal = module.increaseTumbleCountSignal;
      setRoundTypeSignal = module.setRoundTypeSignal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "faa01fWVExEILfOpb3FMzy3", "tumbleAlpha", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var tumbleAlpha = exports('tumbleAlpha', (_dec = ccclass('tumbleAlpha'), _dec2 = property(CCFloat), _dec3 = property(CCFloat), _dec4 = property(CCInteger), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(tumbleAlpha, _Component);
        function tumbleAlpha() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.bonusModel = null;
          _initializerDefineProperty(_this, "startAlpha", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tweenDuration", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveSteps", _descriptor3, _assertThisInitialized(_this));
          _this.sprite = void 0;
          _this.progress = 0;
          _this.startRoundBind = _this.startRoundHandler.bind(_assertThisInitialized(_this));
          _this.increaseTumbleCountBind = _this.increaseTumbleCountHandler.bind(_assertThisInitialized(_this));
          _this.setRoundTypeBind = _this.setRoundTypeHandler.bind(_assertThisInitialized(_this));
          return _this;
        }
        var _proto = tumbleAlpha.prototype;
        _proto.onLoad = function onLoad() {
          startRoundSignal.addListener(this.startRoundBind);
          increaseTumbleCountSignal.addListener(this.increaseTumbleCountBind);
          setRoundTypeSignal.addListener(this.setRoundTypeBind);
        };
        _proto.onDestroy = function onDestroy() {
          startRoundSignal.removeListener(this.startRoundBind);
          increaseTumbleCountSignal.removeListener(this.increaseTumbleCountBind);
          setRoundTypeSignal.removeListener(this.setRoundTypeBind);
        };
        _proto.start = function start() {
          this.sprite = this.node.getComponent(Sprite);
          this.sprite.color = new Color(this.sprite.color.r, this.sprite.color.g, this.sprite.color.b, this.startAlpha);
        };
        _proto.reset = function reset() {
          this.progress = 0;
          this.increaseTumbleCountHandler(0);
        };
        _proto.startRoundHandler = function startRoundHandler() {
          this.reset();
        };
        _proto.increaseTumbleCountHandler = function increaseTumbleCountHandler(count) {
          var _this2 = this;
          if (!this.sprite || this.progress === this.moveSteps) {
            return;
          }
          this.progress += count;
          var remainingAlpha = 1 - this.startAlpha;
          var alphaProgress = remainingAlpha * (this.progress / this.moveSteps);
          var maskAlpha = Math.min(255, Math.max(0, (this.startAlpha + alphaProgress) * 255));
          var startColor = this.sprite.color;
          var alphaTarget = {
            alpha: this.sprite.color.a
          };
          tween(alphaTarget).to(this.tweenDuration, {
            alpha: maskAlpha
          }, {
            easing: 'cubicOut',
            onUpdate: function onUpdate(data) {
              _this2.sprite.color = new Color(startColor.r, startColor.g, startColor.b, data.alpha);
            },
            onComplete: function onComplete(data) {
              _this2.sprite.color = new Color(startColor.r, startColor.g, startColor.b, data.alpha);
            }
          }).start();
        };
        _proto.setRoundTypeHandler = function setRoundTypeHandler() {
          var _this$bonusModel;
          if ((_this$bonusModel = this.bonusModel) != null && _this$bonusModel.isBonusAvailable) {
            return;
          }
          this.reset();
        };
        return tumbleAlpha;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startAlpha", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tweenDuration", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "moveSteps", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/tumbleSymbolData.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dcd19006fRDZqcAD/YvAV5p", "tumbleSymbolData", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/uniqueId.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('getUniqueId', getUniqueId);
      cclegacy._RF.push({}, "e1dfd+5JWlJEbnro0ohvQhr", "uniqueId", undefined);
      function getUniqueId() {
        var dateStr = Date.now().toString(36); // convert num to base 36 and stringify
        var randomStr = Math.random().toString(36).substring(2, 8); // start at index 2 to skip decimal point
        return dateStr + "_" + randomStr;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/view.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1b1b3g80hdOtJ4gHPbUyHqh", "view", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/wait.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('wait', wait);
      cclegacy._RF.push({}, "c74c4UV86JKNK8Wbyt4wlDE", "wait", undefined);
      function wait(ms) {
        return new Promise(function (resolve) {
          return setTimeout(resolve, ms);
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/winData.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "74217YGISpFm5dNClbVHKZl", "winData", undefined);
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});